const express = require('express')
const connectDB = require('./config/db')
const userRoutes = require("./routes/userRoutes");
const dotenv =require('dotenv')
const cors = require('cors')


const app = express()
dotenv.config()
connectDB()
app.use(express.json());
(cors);
app.use("/app/user",userRoutes);



app.listen(4000,console.log("Successfully opened online chatting app"))