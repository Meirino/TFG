let jwt = require('jsonwebtoken');
const config = require('../config');

/* Importar conexiones a BDD */
const squel = require("squel");
const mysql = require("mysql2");
const connection_data = config.connection_data;

/* bcrypt */
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* Redis */
let redis = require("redis");
let client = redis.createClient(6379, "localhost");

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
                    message: 'Token no válido'
                });
            } else {
                req.decoded = decoded;
                client.get(token, (err, data) => {
                    if(err || data === null) {
                        return res.json({
                            success: false,
                            message: 'Token expirado'
                        });
                    } else {
                        return res.status(200).send({
                            success: true,
                            message: 'Token válido'
                        });
                    }
                });
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
                console.log(user_data);
                user_email = user_data.email;
                user_hashed_password = user_data.password;

                let response = checkLoginData(email, password, user_email, user_hashed_password);
                let data = {
                    id: user_data.id,
                    user_name: user_data.username,
                    email: user_email
                };
                // Guardar token en Redis
                response.token? client.set(response.token, JSON.stringify(data)) : console.log("Login fallido.");

                // Devolver respuesta
                let code = response.code;
                delete response['code'];
                response.userdata = data;
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

let logout = (req, res) => {

    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer')) {
        // Eliminar Bearer del string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'El token no es válido'
                });
            } else {
                client.del(token, function(err, response) {
                    if (response === 1) {
                        return res.status(204).send({
                            success: true,
                            message: 'La sesión se ha eliminado',
                            token: '',
                            userdata: undefined
                        });
                    } else{
                        console.log("No hay sesiones registradas.");
                        return res.status(404).send({
                            success: false,
                            message: 'La sesión no se ha encontrado',
                            token: '',
                            userdata: {
                                id: 0,
                                user_name: '',
                                email: ''
                            }
                        });
                    }
                })
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'No se ha enviado un token'
        });
    }
};

let getSession = (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];

    if(!token) {
        if (token.startsWith('Bearer')) {
            // Eliminar Bearer del string
            token = token.slice(7, token.length);
        }
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'El token no es válido'
                });
            } else {
                client.get(token, (data) => {
                    res.status(200).send({
                        success: true,
                        message: 'La sesión se ha recuperado',
                        token: token,
                        userdata: data
                    });
                });
            }
        });
    }
};

module.exports = {
    checkToken: checkToken,
    login: login,
    index: index,
    logout: logout,
    getSession: getSession
};