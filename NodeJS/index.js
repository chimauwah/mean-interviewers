// pacakge import
const express = require('express');
const bodyParser = require('body-parser');

// local import
const { mongoose } = require('./db.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started at port : 3000'));
