import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'

const Message = ({ msg }) => {

    const { user } = useContext(AuthContext)
    const { sender, message } = msg
    return (
        <div>
            {(user._id === sender._id) ? (
                <div className="flex justify-end mb-4 cursor-pointer">
                    <div className="flex-1 max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                        <p>{message}</p>
                    </div>
                    {/* <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                        <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full" />
                    </div> */}
                </div>
            ) : (
                <div className="flex mb-4 cursor-pointer">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                        <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full" />
                    </div>
                    <div className="flex-1 max-w-96 bg-white rounded-lg p-3 gap-3">
                        <strong>{msg.sender.username}</strong>
                        <p className="text-gray-700">{message}</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Message