'use strict'

const express = require("express");
const app = express();
const dbConnect = require("./config/dbConfig")

dbConnect();

const router = require("./routes/contactRoute")

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Node JS I am Aiden");
})

app.use("/contacts", router)

app.listen(3000, ()=> {
  console.log("Server is On");
})