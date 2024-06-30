const express = require("express");
const router = express.Router();

const {getAllContacts, createContact} = require("../controllers/contactController.js")

router
  .route("/")
  .get(getAllContacts)
  .post(createContact)


router
  .route("/:id")
  .get((req, res) => {
    res.send(`view one contact ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`edit one contact ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`delete one contact ${req.params.id}`)
  })

module.exports = router;