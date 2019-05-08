const squel = require("squel");
const mysql = require("mysql");
const connection_data = require('../mysql').connection_data;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");

const uuid = require("uuid");

function buscarUsuario(email, callback) {
  const connection = mysql.createConnection(connection_data);
  const selectUser = squel.select()
    .field("user_id", "id")
    .field("username")
    .field("usermail", "email")
    .field("password")
    .from("users", "u")
    .where("u.usermail = ?", email)
    .toString();

  connection.connect();
  connection.query(selectUser, (err, result) => {
    if (err) {
      return callback(null, null);
    } else {
      result = result[0];
      return callback(null, result);
    }
  });
}

// Configurar la estrategia local
exports.passportLocalStrategy = new LocalStrategy({
    // this maps the file names in the html file to the passport stuff
    usernameField: "email",
    passwordField: "password"
  },
  (email, password, done) => {
    // replace this with our search function, mysql/monogo/service/etc
    buscarUsuario(email, function (err, user) {
      const connection = mysql.createConnection(connection_data);
      const sessionId = uuid.v4();

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

            // Creo la query para insertar un token nuevo
            const token = sessionId.toString();
            const createToken = squel
              .insert()
              .into("user_info", "ui")
              .set("user_id", user.id)
              .set("session_token", token)
              .toString();

            try {
              user = {
                username: user.username,
                email: user.email,
                password: user.password,
                id: user.id,
                sessionToken: token
              }
              connection.query(createToken, () => {
                console.log(`Usuario ${user.username} ha accedido correctamente con el token ${token}`);
                return done(null, user);
              });
            } catch (error) {
              console.log("Error de inserción de token");
              return done(null, false, {
                message: "Error de inserción de token"
              });
            }
          } else {
            console.log("Revise sus datos");
            return done(null, false, {
              message: "Incorrect password."
            });
          }
        });
      }
    });
  }
)

exports.login = function (req, res, next) {
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
}

exports.register = function (req, res, next) {
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
}