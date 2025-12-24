const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    gender: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports=mongoose.model("studentdetails",studentSchema)
