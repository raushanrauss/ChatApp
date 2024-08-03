const { userModel } = require("../UserSchema/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

// Secret key for JWT signing
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Ideally, this should be in your environment variables

const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Ensure username and password are provided
        if (!username || !password) {
            return res.status(400).json({ msg: "Username and password are required" });
        }

        // Find user by username
        const user = await userModel.findOne({ username });

        if (!user) {
            return res.status(404).json({ msg: "Username not found" });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            // Generate JWT token
            const token = jwt.sign(
                { userId: user._id, username: user.username }, // Payload
                JWT_SECRET, // Secret key
                { expiresIn: '1h' } // Token expiry time
            );

            return res.status(200).json({ msg: "Login successful", token });
        } else {
            return res.status(400).json({ msg: "Incorrect password" });
        }

    } catch (error) {
        console.error("Login error:", error); // Log the error for debugging
        return res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = { userLogin };
