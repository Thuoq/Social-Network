const mongoose = require("mongoose")

const AddressSchema = new mongoose.Schema({
  idUser : mongoose.Types.ObjectId,
  country: String,
  postCode : Number,
  distinct: String,
  state : String
})


const Address = mongoose.model("Address", AddressSchema , "address" );

module.exports = Address