const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
// const bodyParser = require('body-parser');
// const { Model } = require("objection");
// import { Post } from './models/Post';
// // let posts = Post(); 



// // Database Model
// class Note extends Model {
//   static get tableName() {
//     return "notes";
//   }
// } 
// routes
app.get('/', (req, res) => {
  res.status(200).json({
    error: false,
    message: 'Bonjour, mon ami',
  });
});

// app.get("/notes", async (req, res) => {
//   const notes = await Note.query();

//   res.status(200).json({ message: "all notes", data: notes });
// });

// db connection
mongoose.connect(process.env.DB_CONNECTION,
     { useNewUrlParser: true },
     () => 

     console.log('db connected')
)

app.listen(3000);

module.exports = app;
