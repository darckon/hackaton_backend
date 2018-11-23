const UserModel = require('../models/users');
const jwt = require('jsonwebtoken');
const userCtrl = {};



/*exports.register = function(req, res) {
    var newUser = new User(req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    newUser.save(function(err, user) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        user.hash_password = undefined;
        return res.json(user);
      }
    });
  };*/
  
userCtrl.sign_in = function(req, res) {
    const { body } = req;
    UserModel.findByUsername(body, function(err, user) {
        if (err) throw err;
        if (!user) {
          return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({ token: jwt.sign({ name: user.name,  _id: user.id }, 'Hola') });
      });
};
  
  userCtrl.loginRequired = function(req, res, next) {
    console.log(req.user);
    if (req.user) {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  };

userCtrl.createUser =  async (req, res) => {
    await UserModel.save(req.body);
    res.json('Success');
}

userCtrl.updateUser =  async (req, res) => {
    const { body } = req;
    const user = await UserModel.update(body, function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

userCtrl.deleteUser =  (req, res) => {
    res.json({
        status: 'Metodo getUser'
    });
}

userCtrl.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findById(id, function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

userCtrl.getUsers = async (req, res) => {
    const user = await UserModel.findAll(function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

module.exports = userCtrl;

