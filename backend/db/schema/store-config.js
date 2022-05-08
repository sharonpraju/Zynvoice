const mongoose = require('mongoose');

const storeConfigSchema = new mongoose.Schema({
    title: 'string',
    address: 'string',
    phone: 'string',
    tax: 'string',
    invoice_footer : 'string',
    printer : '',
    validity : 'date',
    plan : 'string',
    activation_date : 'date',
    renewed_date : 'date',
    available_invoices : 'number',
    used_invoices : 'number',
});

module.exports = mongoose.model('storeConfig', storeConfigSchema);