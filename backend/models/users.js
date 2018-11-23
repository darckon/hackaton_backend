const conexion = require('../database');
const userModel = {}

/**
 * Metodo para ingresar Usuario
 * @param data json | Json para el ingreso de Usuario 
 */
userModel.save = function (data){
    conexion.beginTransaction(function(err) {
        if (err) { throw err; }
        conexion.query('INSERT INTO users (name, type) VALUES ("'+data.name+'", "'+data.type+'")', function (error, results, fields) {
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

userModel.update = function(data, callback){
    conexion.beginTransaction(function(err) {
        if (err) { throw err; }
        conexion.query('UPDATE users SET name = "'+ data.name +'", '+ 
                                         'type = "'+ data.type  +'" '+
                                         'WHERE id = '+ data.id +'', function (error, results, fields) {
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

userModel.findAll = function(callback) {
    conexion.query('SELECT * FROM users ',  function(err, rows){
        if (err) {
            callback(err, null);
        } else {
            console.log(rows);
            callback(null, rows);
        }
    });
}

userModel.findById = function(id, callback) {
    conexion.query('SELECT * FROM users WHERE id = ?', id,  function(err, rows){
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows[0]);
        }
    });
}

userModel.findByUsername = function(user, callback) {
    conexion.query('SELECT * FROM users WHERE username = "'+user.username+'" AND password = '+user.password,  function(err, rows){
        if (err) {
            console.log("GG");
            callback(err, null);
        } else {
            console.log("OKK");
            callback(null, rows[0]);
        }
    });
}

/*userModel.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
};*/

module.exports = userModel;