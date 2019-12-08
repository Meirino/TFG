let jwt = require('jsonwebtoken');
const config = require('../config');

/* Importar conexiones a BDD */
const squel = require("squel");
const mysql = require("mysql2");
const connection_data = config.connection_data;

/* bcrypt */
const bcrypt = require('bcrypt');
const saltRounds = 10;

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token.startsWith('Bearer')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};

let login = (req, res) => {

    // Campos del formulario
    let email = req.body.email;
    let password = req.body.password;

    // Inicializar variables
    let user_email = '';
    let user_hashed_password = '';

    // Datos de conexión
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
            console.log(err)
        } else {
            if (result.length === 0) {
                res.status(404).send({
                    success: false,
                    message: 'Datos incorrectos: Usuario no encontrado.'
                });
            } else {
                let user_data = result[0];
                user_email = user_data.email;
                user_hashed_password = user_data.password;

                let response = checkLoginData(email, password, user_email, user_hashed_password);
                let code = response.code;
                delete response['code'];
                response.userdata = {
                    id: user_data.id,
                    user_name: user_data.username,
                    email: user_email
                };
                res.status(code).send(response);
            }
        }
    });
};

function checkLoginData(email, password, user_email, user_hashed_password) {

    // Comprobar que los datos de login son correctos
    if (email && password) {
        if (email === user_email) {
            let pass_correct = bcrypt.compareSync(password, user_hashed_password);
            if(pass_correct) {
                let token = jwt.sign({email: user_email},
                    config.secret,
                    { expiresIn: '24h' // Expira en 24 horas
                    }
                );
                // Devolver Token JWT
                return {
                    code: 200,
                    success: true,
                    message: '¡Autenticación correcta!',
                    token: token,
                    userdata: undefined
                };
            } else {
                return {
                    code: 403,
                    success: false,
                    message: 'Datos incorrectos'
                };
            }
        } else {
            return {
                code: 403,
                success: false,
                message: 'Datos incorrectos'
            };
        }
    } else {
        return {
            code: 400,
            success: false,
            message: '¡Autenticación fallida! Revise los campos'
        };
    }
}

let index = (req, res) => {
    res.json({
        success: true,
        message: 'Index page'
    });
};

module.exports = {
    checkToken: checkToken,
    login: login,
    index: index
};