const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// importing routes
// const postsRoute = require('./routes/posts');
// app.use('/posts', postsRoute);

// routes
// app.get('/' , (req,res) => {
//     res.send('my server');
// });

app.get('/', (req, res) => {
    res.status(200).json({
      error: false,
      message: 'HELLO WORLD',
    });
});
  

// app.get('/posts' , (req,res) => {
//     res.send('my server posts');
// });
// app.get("/", async (req, res) => {
//     let message = "hello world!";
  
//     message = message.toUpperCase();
  
//     res.status(200).json({ message });
//   });
//   app.get('/', (req, res) => {
//     res.status(200).json({
//       error: false,
//       message: 'Bonjour, mon ami',
//     });
//   });
// router.post('/posts', async (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });
//     try{
//     const savedPost = await post.save();
//     res.json(savedPost);
//     }
//     catch (err) {
//         res.json({message: err});
//     }
// })





// db connection
mongoose.connect(process.env.DB_CONNECTION,
     { useNewUrlParser: true },
     () => 

     console.log('db connected')
)

app.listen(3000);
