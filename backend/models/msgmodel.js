const mongoose = require('mongoose')

const MsgSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reciver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    msg: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Usermsgmodel = mongoose.model('message', MsgSchema)

module.exports = Usermsgmodel
