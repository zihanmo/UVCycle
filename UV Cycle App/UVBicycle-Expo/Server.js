const express = require('express');
const mongoose = require('mongoose');
// Initialize http server
const app = express();

const bodyParser = require('body-parser');
PORT = 4000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});

// Handle / route
app.get('/', (req, res) =>
  res.send('Hello World!')
)

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/UVBicycle";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
