var User = require('./collections').User;
var express = require('express');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');// allows us send data through database, HDT post
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/UVBicycle";

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true});
let db = mongoose.connection;

// bodyparser setup
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
 
  res.send('Helloooo World');
  
  // app.post('/user', (req, res) => {
  //   console.log(req.body);
  //   db.collection('users').insertOne(req.body, (err, data) => {
  //       if(err) return console.log(err);
  //       res.send(('saved to db: ' + data));
  //   })
  // });
})
var userRouter = express.Router();
app.post('/user', function(req, res) {
  var userData = req.body;
  console.log('Have got user configuration data');
  console.log(userData);
  
  MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    console.log('database connected');

    // create new user record
    var user = new User(userData);
    // insert user to database
    user.save(function(err) {
      if (err) throw err;
      else console.log('User has been saved successfully');
      console.log(user);
    });
  });
})
var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server started at port http://%s:%s", host, port)

})