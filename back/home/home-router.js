/////////////////////////
// Routes for getting and creating (aka posting) information on our home page
/////////////////////////

const path = require('path') // built-in node module: utilities for handling and transforming file paths
const router = require('express').Router(); // Creates a new router object.
const rootPath = path.join(__dirname, "../../") // Join all arguments together and normalize the resulting path: constructing the correct root path to get to other files

//Response for the home page
const home = (req, res) => {
	// Transfers the file at the given path. Sets the Content-Type response HTTP header field based on the filename’s extension.
	// Unless the root option is set in the options object, path must be an absolute path to the file.
  res.sendFile(rootPath + "./front/index.html");
}

//Configure router for get and post calls
// app.get('/', function (req, res) {
//   res.send('GET request to homepage');
// });
router.route('/').get(home)

module.exports = router;
