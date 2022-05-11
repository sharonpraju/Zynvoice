const authModel = require('../models/authModel');

exports.authLoginController = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    authModel.authLoginModel(username, password).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.authPasswordResetController = function(req, res) {
    var username = req.body.username;
    authModel.authPasswordResetModel(username).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};