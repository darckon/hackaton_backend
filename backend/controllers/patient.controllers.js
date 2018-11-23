const patientModel = require('../models/patient');
const jwt = require('jsonwebtoken');
const patientCtrl = {};
  

patientCtrl.createPatient =  async (req, res) => {
    await patientModel.save(req.body);
    res.json('Success');
}

patientCtrl.updatePatient  =  async (req, res) => {
    const { body } = req;
    const user = await patientModel.update(body, function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

patientCtrl.deletePatient  =  (req, res) => {
    res.json({
        status: 'Metodo getUser'
    });
}

patientCtrl.getPatient  = async (req, res) => {
    const { id } = req.params;
    const user = await patientModel.findById(id, function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

patientCtrl.getPatients = async (req, res) => {
    const user = await patientModel.findAll(function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

module.exports = patientCtrl;

