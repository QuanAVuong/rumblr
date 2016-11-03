/////////////////////////
// Routes for getting and creating (aka posting) blog posts
/////////////////////////

// creates router object
const router = require('express').Router();
const Post = require('mongoose').model('Post');

//Get all posts from database
const getPosts = (req, res) => {
	// // testing a post request
	// Post.create({title: 'testing12333333', test: 'sucessfully created a test post'}, () => {
 //    console.log('post successfully created');
 //  })
  Post.find({}, (err, data) => {
    res.send(data);
  })
}

//Create a new test post in database
const postPosts = (req, res) => {
  console.log("AJAX request works: ", req.body)
  Post.create(
  	{
      // Express: req.body
      // Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.
  		// body: this.state.input(:e.target.value)
  		// post: ajax>data>post key
  		title: req.body.post, 
  		text: 'sucessfully created a test post'
  	},

		() => {
  	console.log('post successfully created');
		})
}

//Configure router for get and post calls
router.route('/')
  .get(getPosts) // orders doesn't matter here: get/post are different types
  .post(postPosts)

 // the above is an extraction of a following example:
   
 //  router.get("/", function(req, res) { 
 //    res.send("localhost:5555/defaultPath/", getPosts)
 //  })
 //  router.get("/testing", function(req, res) { 
 //    res.send("localhost:5555/defaultPath/testing", getPosts)
 //  })

 //  app.use("/defaultPath", router) // app is abstracting other routes through router, nested inside default path: localhost:5555/defaultPath

module.exports = router;
