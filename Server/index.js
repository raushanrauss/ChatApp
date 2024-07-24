const express = require("express");
const { connectToDb } = require("./ConnectToDb/connectToDb");
const mongoose = require("mongoose");
const { userModel } = require("./UserSchema/userModel");
const app = express();
app.use(express.json())
const url = "mongodb+srv://rausskr6565:Rauss@1999@cluster007.gwcmttz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster007"
require('dotenv').config();
app.post("/register", async(req, res) => {
    try {
        
        const { username, email, password } = req.body;
        const userData = new userModel({
            username,email,password
        })
        await userData.save();
        res.status(200).json({ msg: "Data sent successfully",userData:userData})
    }
    catch (err) {
        console.log(err)
    }
})


app.listen(process.env.PORT, async () => {
    try {
         await  connectToDb
        console.log("Server is connected to the Db")
        console.log(`Server is connected at ${process.env.PORT}`);
    }
    catch (err) {
        console.log(err)
    }
   
})