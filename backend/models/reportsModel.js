const sales = require('../db/schema/sales');
const purchase = require('../db/schema/purchase');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

var response;
var date = dayjs().format('DD/MM/YYYY');

exports.getSalesReportModel = function(start_date, end_date) {
    return new Promise((resolve, reject)=>{
        sales.find({added_on: { $gt:dayjs(start_date).subtract(1, 'day'), $lt:dayjs(end_date).add(1, 'day') }})
        .then(doc => {
            response = {
                "status": "success",
                "data": doc.items
            }
            resolve(response);
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

exports.getPurchaseReportModel = function(start_date, end_date) {
    return new Promise((resolve, reject)=>{
        purchase.find({added_on: { $gt:ISODate(dayjs(start_date).subtract(1, 'day')), $lt:ISODate(dayjs(end_date).add(1, 'day'))  }})
        .then(doc => {
            response = {
                "status": "success",
                "data": doc.items
            }
            resolve(response);
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

exports.addPurchaseReportModel = function(token, invoice_no, comments, landing_cost, purchase_date, supplier, tax_amount) {
    return new Promise((resolve, reject)=>{
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
                let newpurchase = new purchase({
                    added_by : decoded.username,
                    added_on : date,
                    invoice_no : invoice_no,
                    comments : comments,
                    landing_cost : landing_cost,
                    purchase_date : purchase_date,
                    supplier : supplier,
                    tax_amount : tax_amount
                });
            
                newpurchase.save()
                .then(doc => {
                    response = {
                        "status":"success",
                        "message":"Purchase details added sucessfully"
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
    })
};