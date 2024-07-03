const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

const checkLogin = async (req, res, next) => {

  // basic set up 
  res.setHeader("Cache-Control" , "no-cache, no-Store, must-revalidate");

  // get token 
  const token = req.cookies.loginToken;

  if(!token) {
    return res.redirect("/");
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.username = decoded.username;
    console.log(decoded.username)
    next();
  } catch(error) {
    return res.status(401).json( {message: "로그인이 필요합니다"});
  }
}


module.exports = checkLogin;