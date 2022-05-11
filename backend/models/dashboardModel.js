const sales = require('../db/schema/sales');
const purchase = require('../db/schema/purchase');
const stock = require('../db/schema/stock');
const dayjs = require('dayjs');

var response;
var date = dayjs().format('DD/MM/YYYY');

exports.dashboardTotalSalesModel = function() {
    return new Promise((resolve, reject)=>{
        sales.find()
        .then(doc => {
            response = {
                "status":"success",
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

exports.dashboardTotalPurchaseModel = function() {
    return new Promise((resolve, reject)=>{
        purchase.find()
        .then(doc => {
            response = {
                "status":"success",
                "data": doc
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

exports.dashboardSalesTodayModel = function() {
    return new Promise((resolve, reject)=>{
        sales.find({added_on : date})
        .then(doc => {
            response = {
                "status":"success",
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

exports.dashboardPurchaseTodayModel = function() {
    return new Promise((resolve, reject)=>{
        purchase.find({added_on : date})
        .then(doc => {
            response = {
                "status":"success",
                "data": doc
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

exports.dashboardWeeklySalesModel = function() {
    return new Promise((resolve, reject)=>{
        sales.find({added_on: { $gt:dayjs(date).subtract(7, 'day'), $lt:dayjs(date).add(1, 'day') }})
        .then(doc => {
            response = {
                "status":"success",
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

exports.dashboardWeeklyPurchaseModel = function() {
    return new Promise((resolve, reject)=>{
        purchase.find({added_on: { $gt:dayjs(date).subtract(7, 'day'), $lt:dayjs(date).add(1, 'day') }})
        .then(doc => {
            response = {
                "status":"success",
                "data": doc
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

exports.dashboardLowQuantityItemsModel = function() {
    return new Promise((resolve, reject)=>{
        stock.find({$where : "this.quantity < this.low_quantity"})
        .then(doc => {
            response = {
                "status":"success",
                "data": doc
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