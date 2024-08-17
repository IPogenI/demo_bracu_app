import React from 'react'

const ChatHeader = ({currentConv}) => {
    return (
        <header className="bg-white p-4 text-gray-700">
            <h1 className="text-2xl font-semibold">{currentConv.conversationName}</h1>
        </header>
    )
}

export default ChatHeader