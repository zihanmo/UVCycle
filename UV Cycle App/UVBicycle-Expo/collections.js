var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema({
    firstName: String,
    lastName: String,
    skinType: Number,
    sensorName: String,
    password: String
})

module.exports = mongoose.model('users', users);