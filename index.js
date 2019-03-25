"use strict";

// Librerias
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cors = require("cors");

const request = require("request");
const app = express();

// Puerto a usar
const port = 4000;
const users = [
  {
    username: "Javier",
    password: "password",
    email: "jjmeiras@gmail.com",
    avatarURL: "/avatars/00.jpg"
  }
];

function buscarUsuario(email, callback) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.email === email) {
      // callback takes arguments (error,user)
      return callback(null, user);
    }
  }
  return callback(null, null);
}

// Configurar la estrategia local
passport.use(
  new LocalStrategy(
    {
      // this maps the file names in the html file to the passport stuff
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      // replace this with our search function, mysql/monogo/service/etc
      buscarUsuario(email, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          console.log("bad username");
          return done(null, false, {
            message: "Incorrect username."
          });
        } else {
          if (user.password === password) {
            console.log("good username and password");
            return done(null, user);
          } else {
            console.log("good username and bad password");
            return done(null, false, {
              message: "Incorrect password."
            });
          }
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
app.post("/api/login", function(req, res, next) {
  console.log(req.body);
  passport.authenticate("local", function(err, user, info) {
    console.log(err, user, info);
    if (user) {
      res.send({
        user: user
      });
    } else {
      res.send({
        error: err,
        info: info
      });
    }
  })(req, res, next);
});

app.post("/api/register", function(req, res) {
  if (req.body.username && req.body.password) {
    users.push({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      avatarURL: "/avatars/00.jpg"
    });
    res.status(200).send({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      avatarURL: "/avatars/00.jpg"
    });
    console.log(users);
  } else {
    res.status(500);
  }
});

// Escuchando nuestro servidor Node
app.listen(port, () => {
  console.log(`API REST en el puerto: http://localhost:${port}`);
});
