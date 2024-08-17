import React, { useContext, useEffect, useState } from 'react'
import SidebarHeader from './SidebarHeader'
import Conversation from './Conversation'
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'

const ChatSidebar = ({ setCurrentConv }) => {

    const [conv, setConv] = useState([])
    const { user } = useContext(AuthContext)

    //console.log(`/api/conv/${user._id}`)
    const getConv = async () => {
        try {
            const res = await axios.get(`/api/conv/${user._id}`)
            console.log(res.data)
            setConv(res.data)
            if (res.data[0] && res.data[0]._id) {
                setCurrentConv(res.data[0])
            }
        } catch (err) {
            console.log(err.message)
        }

    }

    useEffect(() => {
        getConv()
    }, [])

    //console.log(conv)

    return (
        <div className="w-1/4 bg-white border-r border-gray-300">
            {/* <!-- Sidebar Header --> */}
            <SidebarHeader />

            {/* <!-- Contact List --> */}
            <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
                {
                    conv.map((convo, index) => {
                        return <Conversation key={index} conv={convo} onClick={setCurrentConv} />
                    })
                }


            </div>
        </div>
    )
}

export default ChatSidebar