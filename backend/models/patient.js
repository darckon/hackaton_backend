const conexion = require('../database');
const patientModel = {}

/**
 * Metodo para ingresar Paciente
 * @param data json | Json de Paciente
 */
patientModel.save = function (data){
    conexion.beginTransaction(function(err) {
        if (err) { throw err; }
        conexion.query('INSERT INTO pacientes (name) VALUES ("'+data.name+'")', function (error, results, fields) {
            if (error) {
                status = false;
                return conexion.rollback(function() {
                    throw error;
                });
            }
            conexion.commit(function(err) {
                if (err) {
                  return connection.rollback(function() {
                    throw err;
                  });
                }
                console.log('success!');
            });
        });
    });
}

patientModel.update = function(data, callback){
    conexion.beginTransaction(function(err) {
        if (err) { throw err; }
        conexion.query('UPDATE pacientes SET name = "'+ data.name +'"', function (error, results, fields) {
            if (error) {
                console.log("error");
                status = false;
                callback(err, null);
                return conexion.rollback(function() {
                    throw error;
                });
            }
            conexion.commit(function(err) {
                if (err) {
                  return connection.rollback(function() {
                    throw err;
                  });
                }
                callback(null, true);
            });
        });
    });        
}

patientModel.findAll = function(callback) {
    conexion.query('SELECT * FROM pacientes ',  function(err, rows){
        if (err) {
            callback(err, null);
        } else {
            console.log(rows);
            callback(null, rows);
        }
    });
}

patientModel.findById = function(id, callback) {
    conexion.query('SELECT * FROM pacientes WHERE id = ?', id,  function(err, rows){
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows[0]);
        }
    });
}

module.exports = patientModel;