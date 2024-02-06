const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const User = require('../models/usermodel')
dotenv.config()

const authmiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({
                msg: "User validation failed"
            })
        }

        const SECRET = process.env.JWT_SECRET_KEY

        const verifyuser = jwt.verify(token, SECRET)

        if (!verifyuser) {
            res.status().json({
                msg: "User validation failed"
            })
        }

        const isuser = await User.findById(verifyuser.id).select("-password")

        if (!isuser) {
            return res.status.json({
                msg: "Cannot find the user"
            })
        }

        req.sender = isuser
        next();

    } catch (error) {
        console.log(error);
        res.status.json({
            msg: "Internal server error"
        })
    }
}

module.exports = authmiddleware