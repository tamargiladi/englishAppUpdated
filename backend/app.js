const express = require("express");
const app = express();

/*Due to not having datbase yet, we cant store them yet, SO WE ONLY CHECK IF GETTING THE DATA THROUGH THAT 
  ROUTE WORKS.*/
//To POST request there is a data attached to them.

app.get("/api/username", (req, res, next) => {
  const username1 = "Tamar Giladi";

  res.status(200).json({
    username: username1,
  });
});

// //POST ROUTE
// app.post('/api/posts', (req, res, next) => {
//   const post = req.body
//   console.log(post)

//   //Make sure request doesn't time out
//   res.status(201).json({
//     //OPTIONAL MESSAGE
//     message: 'Post added succesfully',
//   }) //Added a new resource
// })

// app.get('/api/posts', (req, res, next) => {
//   /*Notice - althought 'id' is not part of the originial client model, the 'identical/related' object
//    can have more <additional>  attributes when creating this object in sever side.*/
//   const posts = [
//     { id: 'fdsf', title: 'firstServer', content: 'The winter is coming' },
//     { id: '!24124', title: 'secondServer', content: "What's up?" },
//   ]
//   res.status(200).json({
//     message: 'Posts fetched successfully',
//     posts: posts,
//   }) //JSON Method - return data in the JSON format.
// })

module.exports = app; //Exports app with all the middlewares.
//We can use const, because practically we don't change the values of the app.
