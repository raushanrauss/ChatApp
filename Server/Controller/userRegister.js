const { userModel } = require('../UserSchema/userModel');
const bcrypt=require('bcrypt')
const userRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;

      
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User with this email already exists' });
        }

       
        const hashedPassword = await bcrypt.hash(password, 10);
     
        const userData = await userModel.create({
            username,
            email,
            password:hashedPassword,
        });

       
        res.status(200).json({ msg: 'Data sent successfully', user: userData });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

module.exports = userRegister;
