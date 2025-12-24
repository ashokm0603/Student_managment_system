const express=require("express");
const cors=require("cors")
const app=express();
const dotenv=require("dotenv")

dotenv.config();
const port=process.env.PORT;
const connection=require("./config/db")

connection()
app.use(express.json())
app.use(cors())

const studentRoute=require("./routes/studentroutes");
app.use("/api",studentRoute);

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
}) 

