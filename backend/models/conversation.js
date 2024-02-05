const mongoose = require('mongoose')

const conversationschema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'message',
        default: []
    }]
}, { timestamps: true })

const Userconversations = mongoose.model('Conversation', conversationschema)

module.exports = Userconversations