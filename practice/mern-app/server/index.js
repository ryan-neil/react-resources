/**
 * This file contains all:
 *
 * API setup (GET all users and CREATE a new user)
 * Database setup
 */

const express = require('express');
const app = express();
// import mongoose
const mongoose = require('mongoose');
// import our User model
const UserModel = require('./models/Users');
// import cors
const cors = require('cors');

// Express parsing the json for us
app.use(express.json());
// In order to make requests from frontend (React) to this API without giving us any errors we need to incorporate CORS
app.use(cors());

/**
 * This is our mongoose connection to the mongodb database
 *
 * mongoose 'connect' takes in a string that represents the connection to the cluster
 */
mongoose.connect(
  'mongodb+srv://{username}:{password}@{project-name}.hyslw.mongodb.net/{db-name}?retryWrites=true&w=majority'
);

/**
 * For simplicity all API requests that I make will exist in this file (index.js)
 * Another method would be to use a routes folder to handle all API routing
 */

/**
 * Here we create our "bridge" from the backend to the frontend and when requested from the frontend it will make a connection to our database and send information back
 * These "bridges" are called API endpoints
 */

/**
 * Here we're getting all the users in the database
 *
 * with 'req' when can get information that is sent from the frontend
 * with 'res' we can information from the backend to the frontend
 */
app.get('/api/getUsers', (req, res) => {
  // request data from our database (collection) with '.find()'
  // an empty object (.find({})) will return all items in the database
  // the callback function returns two arguments, 1. any errors that may have occurred and 2. the result from the query
  UserModel.find({}, (err, result) => {
    if (err) {
      // if there's an error send the error to the frontend
      res.json(err);
    } else {
      // send json data to the frontend
      res.json(result);
    }
  });
});

/**
 * Here we're creating a new user and adding it to the database
 *
 * create the POST request which is a request to add data to our database
 * our frontend is going to have some form element where the user can input data (name, age, username, etc.)
 * callback function must be async because most of the operations are going to be async (adding, updating, deleting data)
 */
app.post('/api/createUser', async (req, res) => {
  // we then want to receive that data here
  const user = req.body; // this is the body of the object being passed from the frontend (where 'user' presents the data that we want to insert into our database)
  // we then create a new user with the UserModel template
  const newUser = new UserModel(user);
  // we then save the new user into our database (.save() method from mongoose)
  await newUser.save();

  // return data back to our frontend, this way we know we're getting the correct information in our backend
  res.json(user);
});

// DJ, spin that sh*t...
const PORT = 3001;
app.listen(PORT, () => console.log(`App is running at: http://localhost:${PORT}`));
