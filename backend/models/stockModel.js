const stock = require('../db/schema/stock');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

var response;
var date = dayjs().format('DD/MM/YYYY');

exports.getStockModel = function() {
    return new Promise((resolve, reject)=>{
        stock.find()
        .then(data => {
            resolve(data);
        })
        .catch(err => {
            response = {
                "status":"Failed to fetch stock",
                "message":err.message
            }
            console.error(err);
            return reject(response);
        })
    })
};

exports.addStockModel = function(token, barcode, landing_cost, low_quantity, name, price, quantity, quantity_type, selling_price, show, status, supplier, tax_amount, tax_percent) {
    return new Promise((resolve, reject)=>{
        stock.findOne({ name : name })
        .then(doc => {
            if(doc)
            {
                //item already exist
                let response = {
                    "status":"failed",
                    "message":"Item already exist"
                }
                console.log(doc)
                return reject(response);
            }
            else
            {
                jwt.verify(token, process.env.PRIVATE_KEY, function(err, decoded) {
                    if (err) {
                        let response = {
                            "status":"failed",
                            "message":err.message,
                        }
                        console.log(err);
                        return reject(response);
                    }
                    else
                    {
                        let newstock = new stock({
                            added_by: decoded.username,
                            added_on: date,
                            barcode: barcode,
                            landing_cost: landing_cost,
                            low_quantity: low_quantity,
                            name: name,
                            price: price,
                            quantity: quantity,
                            quantity_type: quantity_type,
                            selling_price: selling_price,
                            show: show,
                            status: status,
                            supplier: supplier,
                            tax_amount: tax_amount,
                            tax_percent: tax_percent,
                            updated_by: null,
                            updated_on: null
                            
                        });
                    
                        newstock.save()
                        .then(doc => {
                            response = {
                                "status":"success",
                                "message":"Stock Added Sucessfully"
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
                    }
                });
            }
        })
        .catch(err => {
            let response = {
                "status":"failed",
                "message":err.message,
            }
            console.log(err);
            return reject(response);
        });
    })
};

exports.updateStockModel = function(token, id, added_by, added_on, barcode, landing_cost, low_quantity, name, price, quantity, quantity_type, selling_price, show, status, supplier, tax_amount, tax_percent) {
    return new Promise((resolve, reject)=>{
        stock.findOne({ name : name })
        .then(doc => {
            if(doc)
            {
                //item exist
                jwt.verify(token, process.env.PRIVATE_KEY, function(err, decoded) {
                    if (err) {
                        let response = {
                            "status":"failed",
                            "message":err.message,
                        }
                        console.log(err);
                        return reject(response);
                    }
                    else
                    {
                        stock.updateMany(
                            { _id: id },
                            {
                              $set: {
                                added_by: added_by,
                                added_on: added_on,
                                barcode: barcode,
                                landing_cost: landing_cost,
                                low_quantity: low_quantity,
                                name: name,
                                price: price,
                                quantity: quantity,
                                quantity_type: quantity_type,
                                selling_price: selling_price,
                                show: show,
                                status: status,
                                supplier: supplier,
                                tax_amount: tax_amount,
                                tax_percent: tax_percent,
                                updated_by: decoded.username,
                                updated_on: date
                              }
                            }
                        )
                        .then(doc => {
                            response = {
                                "status":"success",
                                "message":"Stock Updated Sucessfully"
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
                    }
                });
            }
            else
            {
                let response = {
                    "status":"failed",
                    "message":"Item does not exist"
                }
                console.log(doc)
                return reject(response);
            }
        })
        .catch(err => {
            let response = {
                "status":"failed",
                "message":err.message,
            }
            console.log(err);
            return reject(response);
        });
    })
};

exports.deleteStockModel = function(id) {
    return new Promise((resolve, reject)=>{
        stock.deleteOne({"_id": id})
        .then(data => {
            response = {
                "status":"success",
                "message":"Item Deleted Sucessfully"
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