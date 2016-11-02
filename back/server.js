/////////////////////////
//Server - starts our app's database connection and server
/////////////////////////

const express = require('express');
const app = express(); // instance of express server
const mongoose = require('mongoose'); // link JS to MongoDB


const path = require('path')
const rootPath = path.join(__dirname, '../../')
var bodyParser = require('body-parser');


//Require in models:
//(this is a necessary step that loads our models and registers them with mongoose)
const models = require('./index').models;
//Require in routes:
const routes = require('./index').routes;

//Connect to database and start server:
//(whatever we put after 'localhost/' will automatically be the name of database)
mongoose.connect('mongodb://localhost/blog-app2');

//Store connection as variable
const db = mongoose.connection;
//Start the server after successful database connection:
db.on('open', () => {
	// Mounts the specified middleware function or functions at the specified path. If path is not specified, it defaults to “/”.``

	// A route will match any path that follows its path immediately with a “/”. For example: app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.

	// serving up the bundle folder whenever index.html is looking for bundle.js

	app.use(bodyParser.urlencoded({ extended: false })); // constructing the request, otherwise: undefined
  app.use(express.static('bundle')); 
  app.use('/posts', routes.posts);
  app.use('*', routes.home);
  //Launch server on port 4444:
  app.listen(5555, () => {
    console.log('App listening on port 5555');
  });
});

  //Configure router:
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(express.static('bundle'))
