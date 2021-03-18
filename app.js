const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
// const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.status(200).json({
    error: false,
    message: 'Bonjour, mon ami',
  });
});

// db connection
mongoose.connect(process.env.DB_CONNECTION,
     { useNewUrlParser: true },
     () => 

     console.log('db connected')
)

app.listen(3000);

module.exports = app;
