const squel = require("squel");
const mysql = require("mysql");
const connection_data = require('../mysql').connection_data;

exports.inicializarEjercicios = (user_id) => {
    const connection = mysql.createConnection(connection_data);

    // Crear query
    let inicializar = squel.insert()
        .into("completed_exercises")
        .setFieldsRows([{
            exercise_id: 1,
            user_id: user_id,
            completed: 0
        }, {
            exercise_id: 2,
            user_id: user_id,
            completed: 0
        }, {
            exercise_id: 3,
            user_id: user_id,
            completed: 0
        }, {
            exercise_id: 4,
            user_id: user_id,
            completed: 0
        }, {
            exercise_id: 4,
            user_id: user_id,
            completed: 0
        }])
        .toString();

    connection.connect();
    connection.query(inicializar, (err, result) => {
        if (err) return false;

        return true;
    });
}

exports.completarEjercicio = (req, res) => {
    const connection = mysql.createConnection(connection_data);

    console.log(req.body);

    // Crear query
    let complete = squel.update()
        .table("completed_exercises")
        .set("completed", 1)
        .where("user_id = ? AND exercise_id = ?", req.body.id, req.body.ejercicio)
        .toString();

    connection.connect();
    connection.query(complete, (err, result) => {
        if (err) res.status(500);

        res.status(200).send(true);
    });
}