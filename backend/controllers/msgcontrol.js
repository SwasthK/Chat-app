const Userconversations = require("../models/conversation");
const Usermsgmodel = require("../models/msgmodel");

const sendmsg = async (req, res) => {
    try {
        const { id: recieverid } = req.params;
        const { msg } = req.body;
        const senderid = req.sender._id

        let conversation = await Userconversations.findOne({
            participants: { $all: [recieverid, senderid] }
        })

        if (!conversation) {
            conversation = await Userconversations.create({
                participants: [senderid, recieverid],
            })
        }

        const newmsg = await Usermsgmodel.create({
            sender: senderid,
            reciver: recieverid,
            msg
        })

        if (newmsg) {
            conversation.messages.push(newmsg._id)
        }

        await Promise.all([conversation.save(), newmsg.save()])

        res.status(201).json(newmsg)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Internal server errors"
        })
    }
}

const getmessages = async (req, res) => {
    try {
        const { id: friendId } = req.params
        const senderid = req.sender._id

        const isconversation = await Userconversations.findOne({
            participants: {
                $all: [friendId, senderid]
            }
        }).populate("messages");

        if (!isconversation) {
            return res.status(201).json({})
        }

        res.status(201).json(isconversation.messages)

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: "Internal server error"
        })
    }
}

module.exports = { sendmsg, getmessages }