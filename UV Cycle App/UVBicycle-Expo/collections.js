var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    skinType: Number,
    sensorName: String
});

var uvHistorySchema = new Schema({
    uv_history_id: Number,
    date: {type: Date, default: Date.now()},
    uv_index: Number
});

var workoutSchema = new Schema({
    uv_history_id: Number,
    userEmail: String,
    duration: Number
});
var infoSchema = new Schema({
    infoId: Number,
    title: String,
    description: String,
    url: String
});

var User = mongoose.model('users', userSchema);
var UV_History = mongoose.model('uv_history', uvHistorySchema);
var Workout = mongoose.model('workout', workoutSchema);
var Information = mongoose.model('informatin', infoSchema);
module.exports = {
    User,
    UV_History,
    Workout,
    Information
}