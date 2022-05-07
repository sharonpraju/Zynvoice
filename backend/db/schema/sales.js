const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    added_by : 'string',
    added_on : 'date',
    invoice_no : {type : 'string', unique : true},
    current_invoice : 'boolean',
    items : 'array',
    updated : 'boolean',
    updated_by : 'string',
    updated_on : 'date'
});

module.exports = mongoose.model('sales', salesSchema);