const Contact = require("../models/contactModel")
const asyncHandler = require("express-async-handler")
// const getAll = require("../views/getAll")

// get /contacts
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.render("index.ejs" , {contacts: contacts});
  }
)

// get /contacts/add
const addContactForm = (req, res) => {
  res.render("add.ejs");
}

// post /conatcts
const createContact = async (req, res)=> {
  const {name, email, phone} = req.body
  try {
    const contact = await Contact.create({name, email, phone})
  } catch (err) {
    console.log(err)
    res.send("Please check NAME, Email and Phone#")
  }
  res.redirect("/contacts")
}

// get /contacts/:id
const getContact = asyncHandler( async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  res.render("update.ejs" , {contact : contact})
})

// put /contacts/:id
const updateContact = asyncHandler( async (req, res) => {
  const {name, email, phone} = req.body
  const contact = await Contact.findById(req.params.id)
  if(!contact) {
    throw new Error ("CONTACT not found");
  }

  contact.name = name;
  contact.email = email;
  contact.phone = phone;

  await contact.save();

  res.redirect("/contacts")
})

// delete /contacts/:id 
const deleteContact = asyncHandler( async (req, res) => {
  const id = req.params.id;
  const contact = await Contact.findByIdAndDelete(id);
  res.redirect("/contacts");

})

module.exports = {getAllContacts, createContact, addContactForm, getContact, updateContact , deleteContact}