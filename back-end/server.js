require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 2565;
 
mongoose.connect(process.env.DB,{
  useNewUrlParser: true,
  userCreateIndex: true, 
  useFindAndModify: false
}).then(() => {
  console.log("Database connected successfully")
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 
app.use(bodyParser.urlencoded({ extended: false }))
const RouterUser = require("./routers/user.router");
 
// parse application/json
app.use(bodyParser.json()) 
app.use("/",RouterUser);
app.listen(PORT, () => {
    console.log("I am Running at PORT "  + PORT);
})  