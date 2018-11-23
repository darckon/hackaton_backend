const express = require('express');
const mysql = require('mysql');
const app   = express(); 

const DB_PARAMS = {
    host: 'localhost',
    user: 'root',
    password : '794613',
    database : 'sistemasexpertos'
};
var conexion =  mysql.createConnection(DB_PARAMS);

conexion.connect(function(error){
    if(!!error){
        console.log('Error');
    } else {
        console.log('Connectado')
    }
});

module.exports = conexion;
