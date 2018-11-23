const MRModel = require('../models/medical_records');
const jwt = require('jsonwebtoken');
const MRCtrl = {};
  

MRCtrl.createMR =  async (req, res) => {
    await MRModel.save(req.body);
    res.json('Success');
}

MRCtrl.updateMR  =  async (req, res) => {
    const { body } = req;
    const user = await MRModel.update(body, function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

MRCtrl.getMR  = async (req, res) => {
    const { id } = req.params;
    const user = await MRModel.findById(id, function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

MRCtrl.getMRS = async (req, res) => {
    const user = await MRModel.findAll(function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

MRCtrl.getMRSFilters = async (req, res) => {
    const user = await MRModel.findFilters(req.params, function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

MRCtrl.listStates = async (req, res) => {
    const user = await MRModel.findAll(function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

module.exports = MRCtrl;

