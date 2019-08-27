var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    skinType: Number,
    sensorName: String
})

var User = mongoose.model('users', userSchema);
module.exports = {
    User
}