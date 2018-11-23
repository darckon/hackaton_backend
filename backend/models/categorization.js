const conexion = require('../database');
const categorizationModel = {}

categorizationModel.findAll = function(callback) {
    conexion.query('SELECT * FROM categories ',  function(err, rows){
        if (err) {
            callback(err, null);
        } else {
            console.log(rows);
            callback(null, rows);
        }
    });
}
module.exports = categorizationModel;