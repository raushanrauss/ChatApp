const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        
    },
    email: {
        type: String,
        require: true,
        
    },
    password: {
        type: String,
        require:true
    }
})
const userModel = mongoose.model("User", userSchema)
module.exports={ userModel, userSchema };