/////////////////////////
//Server - starts our app's database connection and server
/////////////////////////

const express = require('express');
const app = express(); // instance of express server
const mongoose = require('mongoose'); // link JS to MongoDB


// This module contains utilities for handling and transforming file paths. Almost all these methods perform only string transformations. The file system is not consulted to check whether paths are valid.
const path = require('path') 

// Join all arguments together and normalize the resulting path: constructing path for project's root
// Arguments must be strings.
const rootPath = path.join(__dirname, '../../')

// Parse incoming request bodies in a middleware before your handlers, availabe under the req.body property.
// https://www.npmjs.com/package/body-parser
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
db.on('open', () => {// Promise#on(event, listener)
  // Adds listener to the event.


  // APP.USE()
	// Mounts the specified middleware function or functions at the specified path. If path is not specified, it defaults to “/”.``

	// A route will match any path that follows its path immediately with a “/”. For example: app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.

	// serving up the bundle folder whenever index.html is looking for bundle.js

  // RESPONSES
  // app.use order matters
	app.use(bodyParser.urlencoded({ extended: false })); // constructing the request, otherwise: undefined
  app.use(express.static('bundle')); 
  app.use('/posts', routes.posts);
  app.use('*', routes.home); // this has to be last, else it won't run any other routes beneath
  //Launch server on port 4444:
  
  // LISTENING FOR REQUESTS
  app.listen(5555, () => {
    console.log('App listening on port 5555');
  });
});

  //Configure router:
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(express.static('bundle'))
