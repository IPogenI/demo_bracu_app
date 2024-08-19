import React, { useEffect, useRef, useState } from 'react'
import ChatSidebar from '../components/ChatComponents/ChatSidebar'
import ChatHeader from '../components/ChatComponents/ChatHeader'
import axios from 'axios'
import Message from '../components/ChatComponents/Message'
import MessageCreation from '../components/ChatComponents/MessageCreation'
import {io} from 'socket.io-client'

const Chat = () => {
    const [currentConv, setCurrentConv] = useState({})
    const [currentMessages, setCurrentMessages] = useState([])
    const socket = useRef(null)

    // useEffect(() => {
    //     socket.current = io("http://localhost:3001")

    //     return () => {
    //         socket.current.disconnect()
    //     }
    // }, [])

    const fetchMessages = async () => {
        try {
            console.log(currentConv._id)
            const res = await axios.get(`/api/message/${currentConv._id}`)
            setCurrentMessages(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(currentConv && currentConv._id) {
            fetchMessages()
        }
        
    }, [currentConv])
    return (
        <div>
            <div className="h-screen overflow-hidden flex items-center justify-center" style={{ background: "#edf2f7" }}>
                <div className="flex h-screen w-screen overflow-hidden">
                    {/* <!-- Sidebar --> */}
                    <ChatSidebar currentConv={currentConv} setCurrentConv={setCurrentConv}/>

                    {/* <!-- Main Chat Area --> */}
                    <div className="flex-1">
                        {/* <!-- Chat Header --> */}
                        <ChatHeader currentConv={currentConv}/>

                        {/* <!-- Chat Messages --> */}
                        <div className="h-screen overflow-y-auto p-4 pb-36">
                            
                            {
                                currentMessages.map((msg, index) => {
                                    return <Message key={index} msg={msg} />
                                })
                            }


                            

                        </div>

                        {/* <!-- Chat Input --> */}
                        <MessageCreation fetchMessages={fetchMessages} currentConv={currentConv}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chat