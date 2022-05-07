const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: 'string',
    email: {type: 'string', unique: true},
    username: {type: 'string', unique: true},
    password: 'string'
});

module.exports = mongoose.model('user', userSchema);