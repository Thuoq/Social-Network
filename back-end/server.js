require('dotenv').config();
const cors = require('cors');
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
app.use(cors())
app.options('*', cors())

 
app.use(bodyParser.urlencoded({ extended: false }))
const RouterUser = require("./routers/user.router");
  
// parse application/json
app.use(bodyParser.json()) 
app.use("/",RouterUser); 
app.listen(PORT, () => {
    console.log("I am Running at PORT "  + PORT);
})  