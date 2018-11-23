var server = require('http').createServer();
var io = require('socket.io')(server);

server.listen(3002, function() {
    console.log('Servicio de Sockets corriendo en http://localhost:3002');
});

io.on('connection', function(socket) {
    
    /**
    *Socket para nuevo usuario
    *@param boolean status
    */
    socket.on('new_user_created', function(status){
        console.log('Notificacion de creacion de nuevo usuario');
        io.sockets.emit('response_medical_record', 'Actualizando registros...');
    });

    /**
    *Socket para ficha paciente
    *@param boolean status
    */
    socket.on('new_medical_record', function(status){
        console.log('Notificacion de creacion de ficha paciente');
        io.sockets.emit('response_medical_record', 'Actualizando registros...');
    });
});