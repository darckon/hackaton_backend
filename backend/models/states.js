const conexion = require('../database');
const stateModel = {}

stateModel.findAll = function(callback) {
    conexion.query('SELECT * FROM states ',  function(err, rows){
        if (err) {
            callback(err, null);
        } else {
            console.log(rows);
            callback(null, rows);
        }
    });
}
module.exports = stateModel;