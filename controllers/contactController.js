const Contact = require("../models/contactModel")

const asyncHandler = require("express-async-handler")

// get /contacts
const getAllContacts = asyncHandler(async (req, res) => {
  res.send("contacts Page")
  }
)

// post /conatcts
const createContact = asyncHandler( async (req, res)=> {
  const {name, email, phone} = req.body
  const contact = await Contact.create(
    {name, email, phone})
  res.send("contact is created")
}
)
// get /contacts/:id
// put /contacts/:id
// delete /contacts/:id 


module.exports = {getAllContacts, createContact}