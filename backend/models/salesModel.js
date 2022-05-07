const mongoose = require('mongoose');
const sales = require('../db/schema/sales');
const jwt = require('jsonwebtoken');

var response;
let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');

exports.getSalesModel = function() {
    return new Promise((resolve, reject)=>{
        sales.find({current_invoice:true})
        .then(data => {
            resolve(data);
        })
        .catch(err => {
            response = {
                "status":"Failed to fetch sales",
                "message":err.message
            }
            console.error(err);
            return reject(response);
        })
    })
};

exports.addSalesModel = function(token, invoice_no, name, quantity, price, selling_price, landing_cost, quantity_type, tax_amount, tax_percent) {
    return new Promise((resolve, reject)=>{
        sales.findOne({ invoice_no : invoice_no, items : { $elemMatch: { name : name } } })
        .then(doc => {
            if(doc)
            {
                //item already exist
                //increasing item quantity
                var item_array = doc.items;
                var item = item_array.find(item_array => item_array.items.name == name);
                if (item) {
                      item.quantity = item.quantity + 1;
                }
                
                let response = {
                    "status":"success",
                    "message":"Invoice Updated Sucessfully"
                }
                console.log(doc)
                return reject(response);
            }
            else
            {
                sales.findOne({ invoice_no : invoice_no })
                .then(doc => {
                    if(doc)
                    {
                        //invoice exist but item does not exist
                        let newsales = {name : name, quantity : quantity, price : price, selling_price : selling_price, landing_cost : landing_cost, quantity_type : quantity_type, tax_amount : tax_amount, tax_percent : tax_percent};
                        sales.updateOne(
                            { invoice_no : invoice_no }, 
                            { $push: { items: newsales } }
                        )
                        .then(doc => {
                            response = {
                                "status":"success",
                                "message":"Invoice Updated Sucessfully"
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
                    else
                    {
                        //invoice does not exist
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
                                let newsales = new sales({
                                    added_by : decoded.username,
                                    added_on : date,
                                    invoice_no : invoice_no,
                                    current_invoice : true,
                                    items : [{name : name, quantity : quantity, price : price, selling_price : selling_price, landing_cost : landing_cost, quantity_type : quantity_type, tax_amount : tax_amount, tax_percent : tax_percent}],
                                    updated : false,
                                    updated_by : null,
                                    updated_on : null
                                });
                            
                                newsales.save()
                                .then(doc => {
                                    response = {
                                        "status":"success",
                                        "message":"Item Added Sucessfully"
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

exports.updateSalesModel = function(token, invoice_no, name, quantity, price, selling_price, landing_cost, quantity_type, tax_amount, tax_percent) {
    return new Promise((resolve, reject)=>{
        sales.findOne({ invoice_no : invoice_no })
        .then(doc => {
            if(doc)
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
                        var item_array = doc.items;
                        var item = item_array.find(item_array => item_array.items.name == name);
                        if (item) {
                            item.name = name; 
                            item.quantity = quantity; 
                            item.price = price; 
                            item.selling_price = selling_price; 
                            item.landing_cost = landing_cost; 
                            item.quantity_type = quantity_type; 
                            item.tax_amount = tax_amount; 
                            item.tax_percent = tax_percent;
                        }
                    
                        sales.updateMany(
                            { invoice_no : invoice_no },
                            {
                              $set: {
                                added_by : decoded.username,
                                added_on : date,
                                invoice_no : invoice_no,
                                current_invoice : true,
                                items : item_array,
                                updated : false,
                                updated_by : null,
                                updated_on : null
                              }
                            }
                        )
                        .then(doc => {
                            response = {
                                "status":"success",
                                "message":"Sales Updated Sucessfully"
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

exports.deleteItemSalesModel = function(invoice_no, name) {
    return new Promise((resolve, reject)=>{
        sales.findOne({ invoice_no : invoice_no })
        .then(doc => {
            if(doc)
            {
                var item_array = doc.items;
                const index = item_array.findIndex(x => x.name === name);
                if (index !== undefined) item_array.splice(index, 1);

                sales.updateMany(
                    { invoice_no : invoice_no },
                    {
                      $set: {
                        added_by : decoded.username,
                        added_on : date,
                        invoice_no : invoice_no,
                        current_invoice : true,
                        items : item_array,
                        updated : false,
                        updated_by : null,
                        updated_on : null
                      }
                    }
                )
                .then(doc => {
                    response = {
                        "status":"success",
                        "message":"Sales Updated Sucessfully"
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

exports.deleteSalesModel = function(invoice_no) {
    return new Promise((resolve, reject)=>{
        sales.deleteOne({invoice_no : invoice_no})
        .then(data => {
            response = {
                "status":"success",
                "message":"Invoice Deleted Sucessfully"
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