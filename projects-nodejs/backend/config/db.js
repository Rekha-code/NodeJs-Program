// const mongoose = require('mongoose')
// const connectDB = async () =>{
//   try{ 
//   const conn =await mongoose.connect("mongodb://0.0.0.0:27017/Chatting",{
//     useNewUrlPasrser:true,
//     useUnifiedTopology:true,
//   })
//   console.log(`Connected to Database ${conn.Connection.host}`)
// }

// catch(error){
//   console.log(error);
//   process.exit()
// }
// }
// module.exports=connectDB


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://0.0.0.0:27017/Chatting", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to Database...${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;