const statesModel = require('../models/states');
const jwt = require('jsonwebtoken');
const statesCtrl = {};

statesCtrl.getStates = async (req, res) => {
    const user = await statesModel.findAll(function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

module.exports = statesCtrl;

