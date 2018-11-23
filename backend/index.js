const express = require('express');
const morgan  = require('morgan');
const app     = express();
const { mysql } = require('./database');
const jsonwebtoken = require("jsonwebtoken");
const cors = require('cors');

//Settings
app.set('port', 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'Hola', function(err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      });
    } else {
      req.user = undefined;
      next();
    }
  });
  
//Routes
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/patients', require('./routes/patients.routes'));
app.use('/api/medical_records', require('./routes/medical_records.routes'));

app.listen(app.get('port'), () => {
    console.log('Server funcionando en puerto ' + app.get('port'));
});