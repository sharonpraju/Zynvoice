const bcrypt = require('bcryptjs');
const storeConfig = require('../db/schema/store-config');
const users = require('../db/schema/users');
const stock = require('../db/schema/stock');
const sales = require('../db/schema/sales');
var fs = require('fs');

var response;

exports.getGeneralSettingsModel = function() {
    return new Promise((resolve, reject)=>{
        storeConfig.find()
        .then(doc => {
            response = {
                "status":"success",
                "message":"Details fetched successfully.",
                "details": doc,
            }
            resolve(response);
        })
        .catch(err => {
            response = {
                "status":"failed",
                "message":"Something went wrong.",
            }
            console.error(err);
            return reject(response);
        })
    })
};

exports.updateGeneralSettingsModel = function() {
    return new Promise((resolve, reject)=>{
        storeConfig.updateMany(
            {
              $set: {
                  title : title,
                  address : address,
                  phone : phone,
                  tax : tax,
                  invoice_footer : invoice_footer,
                  printer : printer
              }
            },
            { upsert : true }
        )
        .then(doc => {
            response = {
                "status":"success",
                "message":"Details Updated Sucessfully"
            }
            return resolve(response);
        })
        .catch(err => {
            response = {
                "status":"failed",
                "message":"Something Went Wrong"
            }
            console.log(err);
            return reject(response);
        });
    })
};

exports.getUsersSettingsModel = function() {
    return new Promise((resolve, reject)=>{
        users.find()
        .then(doc => {
            response = {
                "status":"success",
                "message":"Users fetched successfully.",
                "users": doc,
            }
            resolve(response);
        })
        .catch(err => {
            response = {
                "status":"failed",
                "message":"Something went wrong.",
            }
            console.error(err);
            return reject(response);
        })
    })
};

exports.addUserSettingsModel = function(name,email,username,password) {
    return new Promise((resolve, reject)=>{
        users.find({username : username})
        .then(doc => {
            if(doc)
            {
                response = {
                    "status":"failed",
                    "message":"Username already exist."
                }
                reject(response);
            }
            else
            {
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        let newuser = new users({
                            name : name,
                            email : email,
                            username : username,
                            password : hash
                        });
                    
                        newuser.save()
                        .then(doc => {
                            response = [{
                                "status":"success",
                                "message":"Users added successfully."
                            },]
                            resolve(response);
                        })
                        .catch(err => {
                            response = {
                                "status":"failed",
                                "message":"Something went wrong.",
                            }
                            console.error(err);
                            reject(response);
                        })
                    });
                });
            }
        })
        .catch(err => {
            response = {
                "status":"failed",
                "message":"Something went wrong.",
            }
            console.error(err);
            return reject(response);
        })
    })
};

exports.removeUsersSettingsModel = function(username) {
    return new Promise((resolve, reject)=>{
        users.deleteOne({username: username})
        .then(data => {
            response = {
                "status":"success",
                "message":"User removed sucessfully"
            }
            return resolve(response);
        })
        .catch(err => {
            response = {
                "status":"Failed to remove item",
                "message":err.message
            }
            console.error(err);
            return reject(response);
        })
    })
};

exports.passwordSettingsModel = function(username, current_password, new_password) {
    return new Promise((resolve, reject)=>{
        users.find({username: username})
        .then(doc => {
            bcrypt.compare(current_password, doc[0].password, function(err, auth) {
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(new_password, salt, function(err, hash) {
                        users.updateMany(
                            { username : username },
                            {
                              $set: {
                                  password : hash
                              }
                            }
                        )
                        .then(doc => {
                            response = {
                                "status":"success",
                                "message":"Password changed sucessfully"
                            }
                            return resolve(response);
                        })
                        .catch(err => {
                            response = {
                                "status":"failed",
                                "message":"Something went wrong"
                            }
                            console.log(err);
                            return reject(response);
                        });
                    });
                });
            });
        })
        .catch(err => {
            response = {
                "status":"failed",
                "message":"Something went wrong"
            }
            console.error(err);
            return reject(response);
        })
    })
};

exports.backupSettingsModel = function() {
    return new Promise((resolve, reject)=>{
        stock.find()
        .then(doc => {
            fs.writeFile("../backup/backup-files/stockbackup.txt", doc, (err) => {
            if (err)
            {
                response = {
                    "status":"failed",
                    "message":"Something went wrong"
                }
                console.log(err);
                return reject(response);
            }
            else 
            {
                sales.find()
                .then(doc => {
                    fs.writeFile("../backup/backup-files/salesbackup.txt", doc, (err) => {
                        if (err)
                        {
                            response = {
                                "status":"failed",
                                "message":"Something went wrong"
                            }
                            console.log(err);
                            return reject(response);
                        }
                        else
                        {
                            response = {
                                "status":"success",
                                "message":"Database backup completed successfully"
                            }
                            return resolve(response);
                        }
                    });
                })
                .catch(err => {
                    response = {
                        "status":"failed",
                        "message":"Something went wrong"
                    }
                    console.error(err);
                    return reject(response);
                })
            }
            });
        })
        .catch(err => {
            response = {
                "status":"failed",
                "message":"Something went wrong"
            }
            console.error(err);
            return reject(response);
        })
    })
};

exports.restoreSettingsModel = function() {
    return new Promise((resolve, reject)=>{
        fs.readFile('../backup/restore-files/stockbackup.txt', 'utf8', function(err, data){
            if(err)
            {
                response = {
                    "status":"failed",
                    "message":"Something went wrong"
                }
                console.error(err);
                return reject(response);
            }
            else
            {
                stock.remove({})
                .then(doc => {
                    stock.insertMany(data)
                    .then(doc => {
                        fs.readFile('../backup/restore-files/salesbackup.txt', 'utf8', function(err, data){
                            if(err)
                            {
                                response = {
                                    "status":"failed",
                                    "message":"Something went wrong"
                                }
                                console.error(err);
                                return reject(response);
                            }
                            else
                            {
                                sales.remove({})
                                .then(doc => {
                                    sales.insertMany(data)
                                    .then(doc => {
                                        response = {
                                            "status":"success",
                                            "message":"Data restored successfully"
                                        }
                                        return resolve(response);
                                    })
                                    .catch(err => {
                                        response = {
                                            "status":"failed",
                                            "message":"Something went wrong"
                                        }
                                        console.error(err);
                                        return reject(response);
                                    })
                                })
                                .catch(err => {
                                    response = {
                                        "status":"failed",
                                        "message":"Something went wrong"
                                    }
                                    console.error(err);
                                    return reject(response);
                                })
                            }
                        });
                    })
                    .catch(err => {
                        response = {
                            "status":"failed",
                            "message":"Something went wrong"
                        }
                        console.error(err);
                        return reject(response);
                    })
                })
                .catch(err => {
                    response = {
                        "status":"failed",
                        "message":"Something went wrong"
                    }
                    console.error(err);
                    return reject(response);
                })

            }
        });
    })
};