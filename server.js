/* Main file for the Node app, I am using express framework to create the backend API for the webapp
and Mongoose(MongoDB) for object modelling. 
It is a basic CRUD application
*/ 
var express = require('express');
var app = express();
var mongoose = require('mongoose'); 	 //mongoose for mongodb
var morgan = require('morgan'); 	
var bodyParser = require('body-parser'); // This will pull information from HTML POST
var methodOverride = require('method-override');

// Database Setup
mongoose.connect('mongodb://Pranav:1234@cluster0-shard-00-00-77dak.mongodb.net:27017,cluster0-shard-00-01-77dak.mongodb.net:27017,cluster0-shard-00-02-77dak.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');     // connecting to the mongoDB database on modulus.io

// App Configuration using express modules
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api + json' }));
app.use(methodOverride());

app.listen(8080);
console.log("App listening on port 8080");