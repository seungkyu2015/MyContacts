const mongoose = require('mongoose');

//schema

const loginSchema = new mongoose.Schema (
  {
    username : {
      type: String,
      required: true,
      unique: true
    },
    password : {
      type: String,
      required: true,
      
    },
  },
  {
    timestamps : true
  }
)

const User = mongoose.model( "ThirdUser" , loginSchema)

module.exports = User;