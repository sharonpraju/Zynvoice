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
    var current_password = req.body.current_password;
    var new_password = req.body.new_password;
    authModel.authPasswordResetModel(username, current_password, new_password).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};