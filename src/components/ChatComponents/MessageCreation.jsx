import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'

const MessageCreation = ({currentConv, fetchMessages}) => {
    const [newMessage, setNewMessage] = useState("")
    const {user} = useContext(AuthContext)


    const handleChange = (e) => {
        e.preventDefault()
        setNewMessage(e.target.value)

    }

    const sendMessageHandler = async (e) => {
        e.preventDefault()
        console.log(newMessage)
        try {
            const res = await axios.post(`/api/message`, {
                sender: user._id,
                message: newMessage,
                conversationId: currentConv._id
            })
            console.log(res.data)
            setNewMessage("")
            fetchMessages()
        } catch (err) {
            console.log(err.message)
        }
    }
    
    return (
        <div>
            <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
                <div className="flex items-center">
                    <input type="text" placeholder="Type a message..." className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" value={newMessage} onChange={handleChange}/>
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2" onClick={sendMessageHandler}>Send</button>
                </div>
            </footer>
        </div>
    )
}

export default MessageCreation