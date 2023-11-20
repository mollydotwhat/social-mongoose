// boilerplate we walked through in class
// MODIFY where useful
const express = require('express');
// connecting to database/mongoose
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create variable to hold our database name
// not sure this goes here, or if it's necessary in this case, so consider this a bookmark.
// const dbName = 'socialDB';

// routes go in controllers

// PRETTY sure this goes here. 
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });