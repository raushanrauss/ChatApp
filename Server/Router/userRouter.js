const { userLogin } = require("../Controller/userLogin");
const userRegister = require("../Controller/userRegister");
const express = require('express');

const userRouter = express.Router();
userRouter.post("/register", userRegister);
userRouter.post("/login",userLogin)
   
module.exports = userRouter;