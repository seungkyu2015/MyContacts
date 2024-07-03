const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin.js")


const {getAllContacts, createContact, addContactForm, getContact, updateContact, deleteContact} = require("../controllers/contactController.js")



router.use(cookieParser());

router
  .route("/")
  .get(checkLogin, getAllContacts)

router
  .route("/add")
  .get(checkLogin, addContactForm).post(checkLogin, createContact)

router
  .route("/:id")
  .get(checkLogin, getContact)
  .put(checkLogin, updateContact)
  .delete(checkLogin, deleteContact)

module.exports = router;