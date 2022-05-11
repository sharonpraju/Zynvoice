const dashboardModel = require('../models/dashboardModel');

exports.dashboardTotalSalesController = function(req, res) {
    dashboardModel.dashboardTotalSalesModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.dashboardTotalPurchaseController = function(req, res) {
    dashboardModel.dashboardTotalPurchaseModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.dashboardSalesTodayController = function(req, res) {
    dashboardModel.dashboardSalesTodayModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.dashboardPurchaseTodayController = function(req, res) {
    dashboardModel.dashboardPurchaseTodayModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.dashboardWeeklySalesController = function(req, res) {
    dashboardModel.dashboardWeeklySalesModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.dashboardWeeklyPurchaseController = function(req, res) {
    dashboardModel.dashboardWeeklyPurchaseModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.dashboardLowQuantityItemsController = function(req, res) {
    dashboardModel.dashboardLowQuantityItemsModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};