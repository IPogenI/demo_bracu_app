import React from 'react'
import ChatSidebar from '../components/ChatComponents/ChatSidebar'
import ChatHeader from '../components/ChatComponents/ChatHeader'

const Chat = () => {
    return (
        <div>
            <div className="h-screen overflow-hidden flex items-center justify-center" style={{ background: "#edf2f7" }}>
                <div className="flex h-screen overflow-hidden">
                    {/* <!-- Sidebar --> */}
                    <ChatSidebar />

                    {/* <!-- Main Chat Area --> */}
                    <div className="flex-1">
                        {/* <!-- Chat Header --> */}
                        <ChatHeader />

                        {/* <!-- Chat Messages --> */}
                        <div className="h-screen overflow-y-auto p-4 pb-36">
                            {/* <!-- Incoming Message --> */}
                            <div className="flex mb-4 cursor-pointer">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                                    <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full" />
                                </div>
                                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                                    <p className="text-gray-700">Hey Bob, how's it going?</p>
                                </div>
                            </div>

                            {/* <!-- Outgoing Message --> */}
                            <div className="flex justify-end mb-4 cursor-pointer">
                                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                                    <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
                                </div>
                                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                                    <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full" />
                                </div>
                            </div>

                            {/* <!-- Incoming Message --> */}
                            <div className="flex mb-4 cursor-pointer">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                                    <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full" />
                                </div>
                                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                                    <p className="text-gray-700">That book sounds interesting! What's it about?</p>
                                </div>
                            </div>

                            {/* <!-- Outgoing Message --> */}
                            <div className="flex justify-end mb-4 cursor-pointer">
                                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                                    <p>It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!</p>
                                </div>
                                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                                    <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full" />
                                </div>
                            </div>

                            {/* <!-- Incoming Message --> */}
                            <div className="flex mb-4 cursor-pointer">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                                    <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full" />
                                </div>
                                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                                    <p className="text-gray-700">I'm intrigued! Maybe I'll borrow it from you when you're done?</p>
                                </div>
                            </div>

                            {/* <!-- Outgoing Message --> */}
                            <div className="flex justify-end mb-4 cursor-pointer">
                                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                                    <p>Of course! I'll drop it off at your place tomorrow.</p>
                                </div>
                                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                                    <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full" />
                                </div>
                            </div>

                            {/* <!-- Incoming Message --> */}
                            <div className="flex mb-4 cursor-pointer">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                                    <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full" />
                                </div>
                                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                                    <p className="text-gray-700">Thanks, you're the best!</p>
                                </div>
                            </div>

                            {/* <!-- Outgoing Message --> */}
                            <div className="flex justify-end mb-4 cursor-pointer">
                                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                                    <p>Anytime! Let me know how you like it. 😊</p>
                                </div>
                                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                                    <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full" />
                                </div>
                            </div>

                            {/* <!-- Incoming Message --> */}
                            <div className="flex mb-4 cursor-pointer">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                                    <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full" />
                                </div>
                                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                                    <p className="text-gray-700">So, pizza next week, right?</p>
                                </div>
                            </div>

                            {/* <!-- Outgoing Message --> */}
                            <div className="flex justify-end mb-4 cursor-pointer">
                                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                                    <p>Absolutely! Can't wait for our pizza date. 🍕</p>
                                </div>
                                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                                    <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full" />
                                </div>
                            </div>
                            {/* <!-- Incoming Message --> */}
                            <div className="flex mb-4 cursor-pointer">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                                    <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full" />
                                </div>
                                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                                    <p className="text-gray-700">Hoorayy!!</p>
                                </div>
                            </div>

                        </div>

                        {/* <!-- Chat Input --> */}
                        <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
                            <div className="flex items-center">
                                <input type="text" placeholder="Type a message..." className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" />
                                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
                            </div>
                        </footer>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chat