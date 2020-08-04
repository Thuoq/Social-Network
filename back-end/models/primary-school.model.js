
const mongoose = require("mongoose");

const PrimarySchoolSchema = new mongoose.Schema({
  idUser: mongoose.Types.ObjectId,
  name: String,
  degree: String,
  fieldStudy: String,
  startYear: Number,
  endYear:Number
})

const PrimarySchool = mongoose.model("PrimarySchool",PrimarySchoolSchema, "primarySchool");

module.exports = PrimarySchool;