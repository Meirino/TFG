"use strict";

// Librerias
const squel = require("squel");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cors = require("cors");
const connection_data = require('./mysql').connection_data;
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const request = require("request");
const mysql = require("mysql");
const app = express();

// Puerto a usar
const port = 4000;

function buscarUsuario(email, callback) {
  const connection = mysql.createConnection(connection_data);
  const selectUser = squel.select()
    .field("username")
    .field("usermail", "email")
    .field("password")
    .from("users", "u")
    .where("u.usermail = ?", email)
    .toString();

  connection.connect();
  connection.query(selectUser, (err, result) => {
    result = result[0];
    return callback(null, result);
  });
  return callback(null, null);
}

// Configurar la estrategia local
passport.use(
  new LocalStrategy({
      // this maps the file names in the html file to the passport stuff
      usernameField: "email",
      passwordField: "password"
    },
    function (email, password, done) {
      // replace this with our search function, mysql/monogo/service/etc
      buscarUsuario(email, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: "Este usuario no existe."
          });
        } else {
          bcrypt.compare(password, user.password, function (err, res) {
            if (res) {
              console.log("good username and password");
              user = {
                username: user.username,
                email: user.email,
                password: user.password,
                avatarURL: "/avatars/01.jpg"
              }
              return done(null, user)
            } else {
              console.log("good username and bad password");
              return done(null, false, {
                message: "Incorrect password."
              });
            }
          });
        }
      });
    }
  )
);

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
app.post("/api/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (user) {
      res.send({
        user: user
      });
    } else {
      res.send({
        info: info
      });
    }
  })(req, res, next);
});

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

// Escuchando nuestro servidor Node
app.listen(port, () => {
  console.log(`API REST en el puerto: http://localhost:${port}`);
});