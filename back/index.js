/////////////////////////
// Index page - import and organize all models and routes. export for use in server
/////////////////////////


//Models
const Posts = require('./posts/posts-model');

//Routes
const home = require('./home/home-router');
const posts = require('./posts/posts-router');
// Without the above we'd have to include them in server.js



module.exports = {
  models: {
    Posts: Posts
  },
  routes: {
    posts: posts,
    home: home
  }
}
