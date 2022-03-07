// Define the structure of the users model

const mongoose = require('mongoose');

// define the users schema
const UserSchema = new mongoose.Schema({
  // create an object that defines all of the fields and values that the User schema should contain
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

/**
 * create a model out of this schema
 *
 * takes two parameters:
 * 1. name of the collection (mongodb compass)
 * 2. the schema that represents that model
 *
 * if the collection hasn't been made, this will automatically create the collection inside the database
 */
const UserModel = mongoose.model('users', UserSchema);

// export the model
module.exports = UserModel;
