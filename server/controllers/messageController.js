import messageModel from "../models/messagesModel.js"

export const getMessages = async (req, res) => {
    const {conversationId} = req.params

    try {
        const messages = await messageModel.find({conversationId}).populate(
            {
                path: 'sender',
                model: 'users',
                select: 'username profilePicture'
            }
        ).populate(
            {
                path: 'conversationId',
                model: 'conversations',
            }
        )

        res.status(200).json(messages)

    } catch (err) {
        res.status(500).json({message: err.message})
        console.log(err.message)
    }
}


export const createMessage = async (req, res) => {
    const {conversationId, message, sender} = req.body

    try {
        const newMessage = await messageModel.create({conversationId, message, sender})
        res.status(201).json(newMessage)
    } catch (err) {
        console.log(err.message) 
        res.status(500).json({message: err.message})
    }
}
