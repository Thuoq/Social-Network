const mongoose = require("mongoose");

const MoreInformationSchema = new mongoose.Schema({
  idUser : mongoose.Types.ObjectId,
  interested : String,
  hobby: String,
  language: String
})

const MoreInformation = mongoose.model("MoreInformation",MoreInformationSchema,"moreInformation");


module.exports = MoreInformation;