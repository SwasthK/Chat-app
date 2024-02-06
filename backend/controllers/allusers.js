const User = require("../models/usermodel");

const allUsers = async (req, res) => {
    try {
        const id = req.sender._id;

        const fetchusers = await User.find({ _id: { $ne: id } }).select('-password')

        if (!fetchusers) {
            return res.status(401).json({ msg: "cannot fetch users" })
        }
        res.status(201).json(fetchusers)
    }
    catch (error) {
        console.log(error);
        res.status(201).json({ msg: "Internal server error" })
    }
}

module.exports = allUsers