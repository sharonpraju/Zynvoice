const settingsModel = require('../models/settingsModel');

exports.getGeneralSettingsController = function(req, res) {
    settingsModel.getGeneralSettingsModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.updateGeneralSettingsController = function(req, res) {
    let title = req.body.title;
    let address = req.body.address;
    let phone = req.body.phone;
    let tax = req.body.tax;
    let invoice_footer = req.body.invoice_footer;
    let printer = req.body.printer;
    settingsModel.updateGeneralSettingsModel(title, address, phone, tax, invoice_footer, printer).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.getUsersSettingsController = function(req, res) {
    settingsModel.getUsersSettingsModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.addUserSettingsController = function(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    settingsModel.addUsersSettingsModel(name, email, username, password).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.removeUserSettingsController = function(req, res) {
    let username = req.body.username;
    settingsModel.removeUsersSettingsModel(username).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.passwordSettingsController = function(req, res) {
    let username = req.body.username;
    let current_password = req.body.current_password;
    let new_password = req.body.new_password;
    settingsModel.passwordSettingsModel(username, current_password, new_password).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.backupSettingsController = function(req, res) {
    settingsModel.backupSettingsModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.restoreSettingsController = function(req, res) {
    let file = req.body.file;
    settingsModel.restoreSettingsController(file).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};