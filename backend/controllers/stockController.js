const stockModel = require('../models/stockModel');

exports.getStockController = function(req, res) {
    stockModel.getStockModel().then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
        console.log(error)
    });
};

exports.addStockController = function(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    let barcode = req.body.barcode;
    let landing_cost = req.body.landing_cost;
    let low_quantity = req.body.low_quantity;
    let name = req.body.name;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let quantity_type = req.body.quantity_type;
    let selling_price = req.body.selling_price;
    let show = req.body.show;
    let status = req.body.status;
    let supplier = req.body.supplier;
    let tax_amount = req.body.tax_amount;
    let tax_percent = req.body.tax_percent;
    stockModel.addStockModel(token, barcode, landing_cost, low_quantity, name, price, quantity, quantity_type, selling_price, show, status, supplier, tax_amount, tax_percent).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.updateStockController = function(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    let id = req.body.id;
    let added_by = req.body.added_by;
    let added_on = req.body.added_on;
    let barcode = req.body.barcode;
    let landing_cost = req.body.landing_cost;
    let low_quantity = req.body.low_quantity;
    let name = req.body.name;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let quantity_type = req.body.quantity_type;
    let selling_price = req.body.selling_price;
    let show = req.body.show;
    let status = req.body.status;
    let supplier = req.body.supplier;
    let tax_amount = req.body.tax_amount;
    let tax_percent = req.body.tax_percent;
    stockModel.updateStockModel(token, id, added_by, added_on, barcode, landing_cost, low_quantity, name, price, quantity, quantity_type, selling_price, show, status, supplier, tax_amount, tax_percent).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};

exports.deleteStockController = function(req, res) {
    let id = req.body.id;
    stockModel.deleteStockModel(id).then((message)=>{
        res.send(message);
    }).catch((error)=>{
        res.status(401).send(error);
    });
};