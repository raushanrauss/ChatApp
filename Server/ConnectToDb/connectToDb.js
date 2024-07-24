const { default: mongoose } = require("mongoose")
require('dotenv').config();
 const connectToDb = async() => {
    try {
        mongoose.connect(process.env.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Server is connected to database")
    }
    catch (err) {
        console.log(err)
    }
}
module.exports={connectToDb}