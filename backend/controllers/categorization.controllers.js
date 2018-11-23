const categorizationModel = require('../models/categorization');
const jwt = require('jsonwebtoken');
const ategorizationCtrl = {};

ategorizationCtrl.getCategorizations = async (req, res) => {
    const user = await categorizationModel.findAll(function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

module.exports = ategorizationCtrl;

