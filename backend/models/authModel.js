const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const users = require('../db/schema/users');
const jwt = require('jsonwebtoken');

var response;

exports.authLoginModel = function(username, password) {
    return new Promise((resolve, reject)=>{
        users.find({username: username, verified : true})
        .then(doc => {
            bcrypt.compare(password, doc[0].password, function(err, auth) {
                if(auth == true)
                {
                    let userdetails = {
                        "username": doc[0].username,
                        "user_id": doc[0]._id,
                    }
                    var token = jwt.sign(userdetails, process.env.PRIVATE_KEY, { expiresIn: '365d' });
                    response = {
                        "status":"success",
                        "message":"Login Successfull",
                        "username": doc[0].username,
                        "user_id": doc[0]._id,
                        "token": token
                    }
                }
                else
                {
                    response = {
                        "status":"Login Failed",
                        "message":"Incorrect login credentials",
                        "username": username,
                        "user_id": null
                    }
                }
                resolve(response);
            });
        })
        .catch(err => {
            response = {
                "status":"Login Failed",
                "message":"Incorrect login credentials",
                "username": username,
                "user_id": null
            }
            console.error(err);
            return reject(response);
        })
    })
};

exports.authPasswordResetModel = function(username, current_password, new_password) {
  return new Promise((resolve, reject)=>{
      if(token == null || token == "null" || token == "" || token == "undefined")
      {
          response = {
              "status":"failed",
              "message":"Wrong Token",
              "email": email,
              "user_id": null
          }
          return reject(response);
      }
      else
      {
          users.find({email: email})
          .then(doc => {
              if(doc[0].token!=token)
              {
                  response = {
                      "status":"failed",
                      "message": "Wrong Token",
                      "email": email,
                      "user_id": null
                  }
                  return reject(response);
              }
              bcrypt.genSalt(10, function(err, salt) {
                  bcrypt.hash(password, salt, function(err, hash) {
                      users.updateOne(
                        { email : email }, 
                                    { $set: {password : hash, token : null } }
                      )
                      .then(doc =>{
                          response = {
                              "status":"success",
                              "message":"Password Changed",
                              "email": email,
                              "user_id": null
                          }
                          resolve(response);
                      })
                      .catch(err =>{
                          response = {
                              "status":"failed",
                              "message": err.message,
                              "email": email,
                              "user_id": null
                          }
                          console.log(err);
                          return reject(response);
                      });
                  });
              });
          })
          .catch(err => {
              response = {
                  "status":"failed",
                  "message": err.message,
                  "email": email,
                  "user_id": null
              }
              console.log(err);
              return reject(response);
          })
      }
  })
};