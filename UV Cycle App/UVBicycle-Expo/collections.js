var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    skinType: Number,
    sensorName: String,
    password: String
})

var User = mongoose.model('users', userSchema);
module.exports = {
    User
}