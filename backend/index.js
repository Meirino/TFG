"use strict";

// Importar librerias
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const passport = require("passport");

// Importar controladores
const loginController = require('./controladores/logincontroller');
const chatController = require('./controladores/chatcontroller');

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

app.post("/api/register", (req, res) => loginController.register(req, res));

app.post("/api/chat", async (req, res) => {
  console.log(req.body);
  let respuesta = await chatController.makePost(req.body.mensaje, req.body.context);
  res.status(200).send(respuesta);
});

// Escuchando nuestro servidor Node
app.listen(port, () => {
  console.log(`API REST en el puerto: http://localhost:${port}`);
});