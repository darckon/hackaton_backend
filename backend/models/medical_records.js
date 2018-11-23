const conexion = require('../database');
const medicarRecordsModel = {}

/**
 * Metodo para ingresar ficha de paciente
 * @param data json | Json de ficha paciente
 */
medicarRecordsModel.save = function (data){
    conexion.beginTransaction(function(err) {
        if (err) { throw err; }
        conexion.query('INSERT INTO users (patient_id, categorization_id, state_id, user, date, comment) VALUES ("'+data.patient+'", "'+data.categorization+'", "'+data.state_id+'", "'+data.user+'" , "'+data.date+'" , "'+data.comment+'")', function (error, results, fields) {
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

medicarRecordsModel.findById = function(id, callback) {
    conexion.query('SELECT * FROM medical_records WHERE id = ?', id,  function(err, rows){
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows[0]);
        }
    });
}

medicarRecordsModel.findAll = function(callback) {
    conexion.query('SELECT * FROM medical_records ',  function(err, rows){
        if (err) {
            callback(err, null);
        } else {
            console.log(rows);
            callback(null, rows);
        }
    });
}

medicarRecordsModel.findFilters = function(data, callback) {
    var filtros = data.data;
    conexion.query('SELECT * FROM medical_records ',  function(err, rows){
        if (err) {
            callback(err, null);
        } else {
            console.log(rows);
            callback(null, rows);
        }
    });
}

module.exports = medicarRecordsModel;