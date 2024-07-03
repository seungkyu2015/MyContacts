'use strict'

const express = require("express");
const app = express();
const contactRouter = require("./routes/contactRoute")
const loginRouter = require("./routes/loginRoute")
const methodOverride = require("method-override")

// DB Connection
const dbConnect = require("./config/dbConfig")
dbConnect();

// View Engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride("_method"))


// Route
app.use("/", loginRouter)
app.use("/contacts", contactRouter)


// Execute
app.listen(3000, ()=> {
  console.log("Server is On");
})