const express = require("express");
const router = express.Router()

const { getLogin , loginUser , getRegister, registerUser, getLogout} = require("../controllers/loginController");

router.
  route("/")
  .get(getLogin)
  .post(loginUser);

router.
  route("/register")
  .get(getRegister)
  .post(registerUser);

router.
  route("/logout")
  .get(getLogout)

module.exports = router;