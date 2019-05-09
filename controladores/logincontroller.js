const squel = require("squel");
const mysql = require("mysql");
const connection_data = require('../mysql').connection_data;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");

const uuid = require("uuid");

function buscarUsuario(email, callback) {
  // Definición de la query para buscar si existe un usuario según el email introducido
  const connection = mysql.createConnection(connection_data);
  const selectUser = squel.select()
    .field("user_id", "id")
    .field("username")
    .field("usermail", "email")
    .field("password")
    .from("users", "u")
    .where("u.usermail = ?", email)
    .toString();

  // Creación de la conexión MySQL y ejecución de la query 
  connection.connect();
  connection.query(selectUser, (err, result) => {
    if (err) {
      return callback(null, null);
    } else {
      if (result.length == 0) return callback(null, undefined);

      /* En caso de encontrarlo, devolver el primer usuario de la lista de coincidencias.
      Siempre debería ser una lista de un solo elemento debido a que el campo email es un campo único. */
      const resultado = result[0];
      return callback(null, resultado);
    }
  });
}

// Configurar la estrategia local de login para Passport
exports.passportLocalStrategy = new LocalStrategy({
    // Esto vincula los inputs del formulario con la función de passport
    usernameField: "email",
    passwordField: "password"
  },
  (email, password, done) => {
    // Función de validación de credenciales según el resultado de ejecutar la función "BuscarUsuario"
    buscarUsuario(email, function (err, user) {
      const connection = mysql.createConnection(connection_data);
      const sessionId = uuid.v4();

      // Si ha ocurrido un error en la ejecucón de la función
      if (err) {
        return done(err);
      }
      if (!user) {
        // Si no se ha encontrado usuario en la búsqueda
        console.log(`El usuario buscado no existe.`)
        return done(null, false, {
          message: "Este usuario no existe."
        });
      } else {
        //BCrypt compara y verifica que el hash de la contraseña introducida coincide con la almacenada en MySQL
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

            // Ejecuto la query para insertar el token y creo un objeto "user" que se devuelve 
            try {
              connection.query(createToken, () => {
                console.log(`Usuario ${user.username} ha accedido correctamente con el token ${token}`);
                user = {
                  username: user.username,
                  email: user.email,
                  password: user.password,
                  id: user.id,
                  sessionToken: token
                }
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
  /* Simplemente consiste en llamar a la función estrategia local de autenticación de Passport.
  Esta estrategia usa las funciones definidas enteriormente y usa el objeto "user" devuelto en la función 
  para mandar al frontend los datos del usuario */

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

  /* Si los valores de contraseña y email son válidos, uso BCrypt para generar una salt
  y usarla para encriptar la contraseña con ella.
  Finalmente se guarda en MySQL los datos del usuario */
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