const StudentModel = require("../model/StudentModel");

const addStudent = async (req, res) => {
  try {
    const newStudent = new StudentModel({
      name: req.body.name,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      course: req.body.course,
      gender: req.body.gender,
    });
    const savedData = await newStudent.save();

    if (savedData) {
      res.status(201).json({
        data: savedData,
        message: "Student Details Added Successfully",
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Not Found" });
  }
};

//getall students details api
const getAllStudents = async (req, res) => {
  try {
    const allDetails = await StudentModel.find();
    if (!allDetails) {
      res.status(404).json({ message: "Student Details Not Found" });
    }
    res.status(200).json({ allStudentDetails: allDetails });
  } catch (err) {
    res.status(500).json({ message: "Server Not Found" });
  }
};

//get Student Details based ID
const getStudentBasedOnId = async (req, res) => {
  try {
    const stdDetails = await StudentModel.findById(req.params.id);

    if (!stdDetails) {
      res.status(404).json({ message: "Student Not Found" });
    }
    res.status(200).json({ student: stdDetails });
  } catch (err) {
    res.status(500).json({ message: "Server Not found" });
  }
};

//edit student Details based ID :
const editStdDetails = async (req, res) => {
  try {
    const updatedStd = await StudentModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        course: req.body.course,
        gender: req.body.gender,
      },
      { new: true }
    );

    if (!updatedStd) {
      res.status(500).json({ message: "Details Not Updated" });
    }

    res.status(201).json({ message: "Updated Successfully", updatedStd });
  } catch (err) {
    res.status(501).json({ message: "Server not found" });
  }
};

const deleteStd = async (req, res) => {
  try {
    
    const deletedStd = await StudentModel.findByIdAndDelete(req.params.id);
    if(!deletedStd){
      res.status(500).json({message:"error to delete student Details"})
    }
    res.status(200).json({message:" student Details deleted Successfully"})
    
  } catch (err) {
    res.status(500).json({message:"server not found"})

  }
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentBasedOnId,
  editStdDetails,
  deleteStd
};
