
const { default: mongoose } = require("mongoose");

const messageSchema = mongoose.Schema({
    message: {
        text: { type: String, required: true }
    },
    user: Array,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
})