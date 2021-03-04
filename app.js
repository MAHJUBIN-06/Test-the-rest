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
  

// db connection
mongoose.connect(process.env.DB_CONNECTION,
     { useNewUrlParser: true },
     () => 

     console.log('db connected')
)

app.listen(3000);
