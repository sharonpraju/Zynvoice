const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    added_by: 'string',
    added_on: 'date',
    barcode: 'string',
    landing_cost: 'number',
    low_quantity: 'number',
    name: {type : 'string', unique : true},
    price: 'number',
    quantity: 'number',
    quantity_type: 'string',
    selling_price: 'number',
    show: 'boolean',
    status: 'number',
    supplier: 'string',
    tax_amount: 'number',
    tax_percent: 'number',
    updated_by: 'string',
    updated_on: 'date'
});

module.exports = mongoose.model('stock', stockSchema);