'use strict'

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Node JS I am Aiden");
})

app.listen(3000, ()=> {
  console.log("Server is On");
})