const mongoose = require("mongoose");

const connection =async () => {
  try {
   await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully..");
    
  } catch (err) {
    console.log("error to connect Database", err);
    
  }
};


module.exports=connection;