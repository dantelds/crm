var mongoose = require('mongoose'),
    jwt = require('express-jwt'),
    service = require('../services/service'),
    Users = mongoose.model('users');


exports.findUser = function (req, res) {
    var username = req.body.username.toLowerCase();   
    
    Users.findOne({"username": username, "password": req.body.password}, function (err, user) {  
        if (err)
            return res.status(500).send(err.message);
        else if (!user)
            return res.status(400).send('invalid-login');
        else{
            res.status(200).send({ token: service.createToken({user:user.username, pwd:user.password})});   
        }
          
    });
};
