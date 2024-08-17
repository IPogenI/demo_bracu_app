import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'

const Conversation = ({conv, onClick}) => {
    let {photo, conversationName, users, isGroup} = conv
    const { user } = useContext(AuthContext)

    //implement conversation name function if not given
    if(!conversationName) {
        conversationName = "Default"
    }
    return (
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={() => {onClick(conv)}}>
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src={photo} alt="User Avatar" className="w-12 h-12 rounded-full" />
            </div>
            <div className="flex-1">
                <h2 className="text-lg font-semibold">{isGroup ? conversationName: conversationName.split(" ")[0]}</h2>
            </div>
        </div>
    )
}

export default Conversation