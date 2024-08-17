import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'

const ChatHeader = ({ currentConv }) => {
    const { user } = useContext(AuthContext)
    let { photo, conversationName, users, isGroup } = currentConv
    if (currentConv && currentConv._id) {

        if (isGroup) {
            let firstnames = users.map(usr => {
                if (usr.username !== user.username) {
                    return usr.username.split(" ")[0]
                } else {
                    return "You"
                }

            })
            conversationName = firstnames.join(", ")
        } else {
            conversationName = users[0].username.split(" ")[0]
            if (conversationName === user.username.split(' ')[0]) {
                conversationName = users[1].username.split(" ")[0]
            }
        }
    }

    return (
        <header className="bg-white p-4 text-gray-700">
            <h1 className="text-2xl font-semibold">{conversationName}</h1>
        </header>
    )
}

export default ChatHeader