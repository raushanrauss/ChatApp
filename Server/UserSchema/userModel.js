const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,  // Corrected this field
    },
    email: {
        type: String,
        required: true,  // Corrected this field
    },
    password: {
        type: String,
        required: true   // Corrected this field
    }
}, { timestamps: true });  // Added timestamps for createdAt and updatedAt

const userModel = mongoose.model("User", userSchema);

module.exports = { userModel, userSchema };
