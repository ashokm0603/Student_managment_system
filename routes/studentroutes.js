const {editStdDetails,deleteStd, addStudent,getAllStudents,getStudentBasedOnId}=require("../controller/StudentController");
const express = require('express')
const router=express.Router()

router.post("/addstudent",addStudent);
router.get("/getallstudents",getAllStudents)
router.get("/getstudent/:id" ,getStudentBasedOnId)
router.put("/updatestd/:id",editStdDetails)
router.delete("/deletestd/:id", deleteStd)
module.exports=router;


