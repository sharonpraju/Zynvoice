const salesModel = require('../models/salesModel');

exports.getSalesController = function(req, res) {
    salesModel.getSalesModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
        console.log(error)
    });
};

exports.addSalesController = function(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    let invoice_no = req.body.invoice_no;
    let landing_cost = req.body.landing_cost;
    let name = req.body.name;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let quantity_type = req.body.quantity_type;
    let selling_price = req.body.selling_price;
    let tax_amount = req.body.tax_amount;
    let tax_percent = req.body.tax_percent;
    salesModel.addSalesModel(token, invoice_no, name, quantity, price, selling_price, landing_cost, quantity_type, tax_amount, tax_percent).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.updateSalesController = function(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    let invoice_no = req.body.invoice_no;
    let landing_cost = req.body.landing_cost;
    let name = req.body.name;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let quantity_type = req.body.quantity_type;
    let selling_price = req.body.selling_price;
    let tax_amount = req.body.tax_amount;
    let tax_percent = req.body.tax_percent;
    salesModel.updateSalesModel(token, invoice_no, name, quantity, price, selling_price, landing_cost, quantity_type, tax_amount, tax_percent).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.deleteItemSalesController = function(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    let invoice_no = req.body.invoice_no;
    let name = req.body.name;
    salesModel.deleteItemSalesModel(invoice_no, name).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.deleteSalesController = function(req, res) {
    let invoice_no = req.body.invoice_no;
    salesModel.deleteSalesModel(invoice_no).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};