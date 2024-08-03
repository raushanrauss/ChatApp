const messageModel = require("../UserSchema/messgeSchema");

const addMessageController = async (req, res, next) => {
    try {
        const { from, to, message } = req.body;
        const data = await messageModel.create({
            message: { text: message },
            users: [from, to],
            sender: from,
        })
        if (data) {
            return res.json({ msg: "Message added successfully" })
        }
        else {
            res.json({ msg: "Failed to message" })
        }
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}



module.exports = addMessageController ;