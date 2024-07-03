const User = require("../models/loginModel")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

// get "/"
const getLogin = (req, res) => {
  res.render("home.ejs") 
}


// Post "/"
const loginUser = asyncHandler( async (req, res) => {
  // get username
  const {username , password} = req.body
  // find user
  const user = await User.findOne({username})
  // match pw
  if(!user) {
    return res.json({ message: "일치하는 사용자가 없습니다"});
  } 

  const isMatch = await bcrypt.compare(password, user.password);
  
  if(!isMatch) {
    return res.json({message : "비밀번호가 일치하지 않습니다"})
  }
  
  // token
  const token = jwt.sign({ id: user._id}, jwtSecret);
  res.cookie("loginToken", token , {httpOnly: true})
  res.redirect("/contacts")
})

// get "/register"
const getRegister = (req, res) => {
  res.render("register.ejs") 
}

// post "/register"
const registerUser = asyncHandler( async (req, res) => {
  const {username , password, password2} = req.body; 

  if(password === password2) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create( {
      username, password: hashedPassword
    })  
    res.json( {message: "Register Successful", user})
  } else {
    res.send("Register Failed");
  }
})


// get "/logout"
const getLogout = (req, res) => {
  res.clearCookie("loginToken");
  res.redirect("/");
}


// module
module.exports = {getLogin , loginUser , getRegister, registerUser, getLogout};