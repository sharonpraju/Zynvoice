const reportsModel = require('../models/reportsModel');

exports.getSalesReportController = function(req, res) {
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    reportsModel.getSalesReportModel(start_date, end_date).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.getPurchaseReportController = function(req, res) {
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    reportsModel.getPurchaseReportModel(start_date, end_date).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.addPurchaseReportController = function(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    var invoice_no = req.body.invoice_no;
    var comments = req.body.comments;
    var landing_cost = req.body.landing_cost;
    var purchase_date = req.body.purchase_date;
    var supplier = req.body.supplier;
    var tax_amount = req.body.tax_amount;
    reportsModel.addPurchaseReportModel(token, invoice_no, comments, landing_cost, purchase_date, supplier, tax_amount).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};