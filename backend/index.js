"use strict";

// Importar librerias
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const passport = require("passport");
const multer = require('multer');
const upload = multer();
const fs = require('fs')

// Importar controladores
const loginController = require('./controladores/logincontroller');
const chatController = require('./controladores/chatcontroller');
const ejercicioscontroller = require('./controladores/ejercicioscontroller');

// Inicializar el puerto a usar para escuchar peticiones para la API
const port = 4000;

passport.use(loginController.passportLocalStrategy);

app.use("/", express.static("public"));
app.use("/chat", express.static("public"));
app.use("/login", express.static("public"));
app.use("/index", express.static("public"));

// Middleware de análisis del cuerpo de Node.js
app.use(
  cors(),
  bodyParser.urlencoded({
    extended: false
  }),
  bodyParser.json()
);

// Definir las rutas y métodos de la API
app.post("/api/login", (req, res, next) => loginController.login(req, res, next));
app.post("/api/refreshLogin", (req, res) => loginController.refreshLogin(req, res));
app.post("/api/signout", (req, res) => loginController.cerrarSesion(req, res));
app.post("/api/register", (req, res) => loginController.register(req, res));
app.post("/api/avatar", upload.any(), (req, res) => {
  let file = req.files[0];
  console.log(file);
  let filePath = __dirname + `/public/avatars/0${file.fieldname}.jpg`;
  fs.appendFile(filePath, file.buffer, function () {
    res.status(201).send();
  });
  res.status(201).send();
});
app.post("/api/chat", async (req, res) => {
  console.log(req.body);
  let respuesta = await chatController.makePost(req.body.mensaje, req.body.context);
  res.status(200).send(respuesta);
});
app.put('/api/datos', (req, res) => loginController.cambiarDatos(req, res));
app.put('/api/ejercicios', (req, res) => ejercicioscontroller.completarEjercicio(req, res));
app.put('/api/lecciones', (req, res) => chatController.completarLeccion(req, res));
app.get('/api/lecciones/:user_id', (req, res) => chatController.getUserLessons(req, res));
app.get('/api/ejercicios/:user_id', (req, res) => ejercicioscontroller.getUserExercises(req, res));
app.get('/api/email/:email', (req, res) => loginController.checkEmail(req, res));

// Escuchando nuestro servidor Node
app.listen(port, () => {
  console.log(`API REST en el puerto: http://localhost:${port}`);
});