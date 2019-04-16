"use strict";

// Librerias
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const passport = require("passport");

// Controladores
const loginController = require('./controladores/logincontroller');
const chatController = require('./controladores/chatcontroller');

// Puerto a usar
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

// Rutas y métodos (POST, GET, PUT, DELETE, etc...)
app.post("/api/login", (req, res, next) => loginController.login(req, res, next));

app.post("/api/register", function (req, res) {
  const connection = mysql.createConnection(connection_data);
  connection.connect();

  if (req.body.email && req.body.password) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        let new_user = squel.insert()
          .into("users")
          .set("username", req.body.username)
          .set("usermail", req.body.email)
          .set("password", hash)
          .set("salt", salt)
          .toString();

        connection.query(new_user);
      });
    });
  } else {
    res.status(500);
  }
});

app.post("/api/chat", async (req, res) => {
  console.log(req.body);
  let respuesta = await chatController.makePost(req.body.mensaje, req.body.context);
  res.status(200).send(respuesta);
});

// Escuchando nuestro servidor Node
app.listen(port, () => {
  console.log(`API REST en el puerto: http://localhost:${port}`);
});