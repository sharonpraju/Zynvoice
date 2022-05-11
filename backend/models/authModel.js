const bcrypt = require('bcryptjs');
const users = require('../db/schema/users');
const jwt = require('jsonwebtoken');
const sendmail = require('sendmail')();

var response;

exports.authLoginModel = function(username, password) {
    return new Promise((resolve, reject)=>{
        users.find({username: username})
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
                    resolve(response);
                }
                else
                {
                    response = {
                        "status":"failed",
                        "message":"Incorrect login credentials",
                        "username": username,
                        "user_id": null
                    }
                }
            });
        })
        .catch(err => {
            response = {
                "status":"failed",
                "message":"Incorrect login credentials",
                "username": username,
                "user_id": null
            }
            console.error(err);
            return reject(response);
        })
    })
};

exports.authPasswordResetModel = function(username) {
  return new Promise((resolve, reject)=>{
//     users.find({username : username})
//     .then(user_data => {
//         if(user_data.length > 0)
//         {
//             let new_password = (Math.random() + 1).toString(36).substring(4);
//             bcrypt.genSalt(10, function(err, salt) {
//                 bcrypt.hash(new_password, salt, function(err, hash) {
//                     users.updateMany(
//                         { username : username },
//                         {
//                           $set: {
//                               password : hash
//                           }
//                         }
//                     )
//                     .then(doc => {
//                             sendmail({
//                                 from: 'support@zynact.com',
//                                 to: user_data[0].email,
//                                 subject: 'Zynvoice password reset.',
//                                 html: `Dear customer please use the below code as password to login to your account.
//                                 <br><br>
//                                 <b>${new_password}</b>
//                                 <br><br>
//                                 You may change your password from the settings after you login with this temporary password.`,
//                             },
//                             function(err, reply) {
//                                 console.log(err && err.stack);
//                                 console.dir(reply);
//                             });

//                             response = {
//                                 "status":"success",
//                                 "message":"Please check your registered email for more instructions."
//                             }
//                             return resolve(response);
//                     })
//                     .catch(err => {
//                         response = {
//                             "status":"failed",
//                             "message":"Something went wrong"
//                         }
//                         console.log(err);
//                         return reject(response);
//                     });
//                 });
//             });
//         }
//         else
//         {
//             response = {
//                 "status":"failed",
//                 "message":"User does not exist"
//             }
//             return reject(response);
//         }
//     })
//     .catch(err => {
//         response = {
//             "status":"failed",
//             "message":"Incorrect login credentials",
//             "username": username,
//             "user_id": null
//         }
//         console.error(err);
//         return reject(response);
//     })
  })
};