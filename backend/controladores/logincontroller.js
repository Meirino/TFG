// Importar modulos de MySQL
const squel = require("squel");
const mysql = require("mysql");
const connection_data = require('../mysql').connection_data;

// Importar modulos relaciones con la autenticación de usuarios
const bcrypt = require('bcrypt');
const saltRounds = 10;
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const ejercicioscontroller = require('./ejercicioscontroller');
const chatcontroller = require('./chatcontroller');
// Importar gnerador de IDs
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
      if (result.length === 0) return callback(null, undefined);

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
        return done(404, false, {
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
                  id: user.id,
                  sessionToken: token
                }
                return done(null, user);
              });
            } catch (error) {
              console.log("Error de inserción de token");
              return done(500, false, {
                message: "Error de inserción de token"
              });
            }
          } else {
            console.log("Revise sus datos");
            return done(401, false, {
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
    }
    if (err) {
      res.status(err).send({
        info: info
      })
    }
  })(req, res, next);
}

exports.register = function (req, res, next) {
  const connection = mysql.createConnection(connection_data);
  connection.connect();

  /* Si los valores de contraseña y email son válidos, uso BCrypt para generar una salt
  y usarla para encriptar la contraseña con ella.
  Finalmente se guarda en MySQL los datos del usuario */
  if (req.body.email && req.body.password && req.body.username) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        let new_user = squel.insert()
          .into("users")
          .set("username", req.body.username)
          .set("usermail", req.body.email)
          .set("password", hash)
          .set("salt", salt)
          .toString();

        connection.query(new_user, (err, result) => {
          // Inicializar las tablas de ejercicios y lecciones completadas

          if (!err) {
            ejercicioscontroller.inicializarEjercicios(result.insertId);
            chatcontroller.inicializarLecciones(result.insertId);
            res.sendStatus(201);
          }

          if (err & err.errno === 1062) {
            res.status(409).send(err);
          }

          if (err & err.errno !== 1062) {
            res.status(500).send(err);
          }
        });
      });
    });
  } else {
    res.status(501).send("Datos incorrectos");
  }
}

exports.refreshLogin = (req, res) => {
  const connection = mysql.createConnection(connection_data);
  connection.connect();

  const id = req.body.user_id;
  const token = req.body.user_token;

  console.log(`id: ${id}, token: ${token}`);

  const query = squel.select()
    .field("u.user_id", "id")
    .field("u.username")
    .field("u.usermail", "email")
    .from("users", "u")
    .join("user_info", "ui")
    .where(`u.user_id = ${id} AND ui.session_token = ?`, token)
    .toString();

  connection.query(query, (err, result) => {
    if (result.length > 0) {
      const resultado = result[0];
      user = {
        username: resultado.username,
        email: resultado.email,
        id: resultado.id,
        sessionToken: token
      }
      res.status(200).send(user);
    }
  });
}

exports.cerrarSesion = (req, res) => {
  const connection = mysql.createConnection(connection_data);
  connection.connect();

  const id = req.body.user_id;
  const token = req.body.user_token;

  console.log(`id: ${id}, token: ${token}`);

  // NO TE OLVIDES DE PONER EL WHERE EN EL DELETE FROM
  const query = squel.delete()
    .from("user_info")
    .where(`user_id = ${id}`)
    .toString();

  connection.query(query, (err, result) => {
    console.log(err)
    if (err) res.status(500).send("Se ha producido un error");
    else res.status(202).send({
      status: true
    });
  });
}

exports.cambiarDatos = (req, res) => {
  const connection = mysql.createConnection(connection_data);

  if (req.body.options.new_pass) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(req.body.options.new_pass, salt, function (err, hash) {
        let new_user = squel.update()
          .table("users")
          .set("username", req.body.options.new_name)
          .set("usermail", req.body.options.new_email)
          .set("password", hash)
          .set("salt", salt)
          .where("user_id = ?", req.body.id)
          .toString();

        connection.connect();
        connection.query(new_user, (err, result) => {
          if (err) res.status(500);

          res.status(200).send(true);
        });
      });
    });
  } else {
    let new_user = squel.update()
      .table("users")
      .set("username", req.body.options.new_name)
      .set("usermail", req.body.options.new_email)
      .where("user_id = ?", req.body.id)
      .toString();

    connection.connect();
    connection.query(new_user, (err, result) => {
      if (err) res.status(500);

      res.status(200).send(true);
    });
  }
}

exports.hello_world = () => {
  return "hello world"
}

exports.checkEmail = (req, res) => {
  const connection = mysql.createConnection(connection_data);
  connection.connect();
  let query = `SELECT EXISTS(SELECT 1 FROM users WHERE users.usermail = "${req.params.email} LIMIT 1") AS "Query"`;
  connection.query(query, (err, result) => {
    if (err) res.status(500).send("Algo salió mal");

    if (result[0]["Query"] === 1) {
      res.status(200).send(true);
    } else {
      res.status(200).send(false);
    }
  });
}

exports.cambiarAvatar = (req, res) => {
  let file = req.files[0];
  let filePath = __dirname + `/public/avatars/${file.originalname}`;
  fs.appendFile(filePath, file.buffer, function () {
    res.status(201).send();
  });
}