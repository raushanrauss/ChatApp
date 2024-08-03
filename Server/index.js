const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { userModel } = require("./UserSchema/userModel");
const userRouter = require("./Router/userRouter");
const messaeRouter = require("./Router/messageRouter");
const socket = require("socket.io");
const app = express();
app.use(express.json())
app.use(cors())
require('dotenv').config();
app.use("/api/user", userRouter);
app.use("/api/message",messaeRouter)
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connetion Successfull");
    })
    .catch((err) => {
        console.log(err.message);
    });

const server=app.listen(process.env.PORT, async () => {
    try {
       
      
        console.log(`Server is connected at ${process.env.PORT}`);
    }
    catch (err) {
        console.log(err)
    }
   
})
const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-recieve", data.msg);
        }
    })
})