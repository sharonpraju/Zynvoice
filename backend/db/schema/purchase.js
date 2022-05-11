const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    added_by : 'string',
    added_on : 'date',
    invoice_no : 'string',
    comments : 'string',
    landing_cost : 'number',
    purchase_date : 'date',
    supplier : 'string',
    tax_amount : 'number',
});

module.exports = mongoose.model('purchase', purchaseSchema);