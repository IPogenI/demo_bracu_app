import React from 'react'
import { FaUserGroup, FaClockRotateLeft, FaBookmark, FaUsers, FaDisplay } from 'react-icons/fa6'

const Sidebar = () => {
    return (
        <>
            <div className='sideBar'>
                {/* Left Side Bar */}
                <nav className='fixed top-20 w-64 h-screen hidden xl:flex'>
                    <ul className="h-[100%] flex flex-col text-base space-y-4 py-7">
                        <div className="flex cursor-pointer rounded-lg mx-2 py-2 hover:bg-gray-500 hover:bg-opacity-10">
                            <button>
                                <a href="#">
                                    <li className="pl-3 flex items-center">
                                        <FaUserGroup className='size-7 text-blue-800' />
                                        <p className="ml-4">
                                            John Doe
                                        </p>
                                    </li>
                                </a>
                            </button>
                        </div>
                        <div className="flex cursor-pointer rounded-lg mx-2 py-2 hover:bg-gray-500 hover:bg-opacity-10">
                            <button>
                                <a href="#">
                                    <li className="pl-3 flex items-center">
                                        <FaClockRotateLeft className='size-7 text-blue-800' />
                                        <p className="ml-4">
                                            Memories
                                        </p>
                                    </li>
                                </a>
                            </button>
                        </div>
                        <div className="flex cursor-pointer rounded-lg mx-2 py-2 hover:bg-gray-500 hover:bg-opacity-10">
                            <button>
                                <a href="#">
                                    <li className="pl-3 flex items-center">
                                        <FaBookmark className='size-7 text-blue-800' />
                                        <p className="ml-4">
                                            Saved
                                        </p>
                                    </li>
                                </a>
                            </button>
                        </div>
                        <div className="flex cursor-pointer rounded-lg mx-2 py-2 hover:bg-gray-500 hover:bg-opacity-10">
                            <button>
                                <a href="#">
                                    <li className="pl-3 flex items-center">
                                        <FaUsers className='size-7 text-blue-800' />
                                        <p className="ml-4">
                                            Groups
                                        </p>
                                    </li>
                                </a>
                            </button>
                        </div>
                        <div className="flex cursor-pointer rounded-lg mx-2 py-2 hover:bg-gray-500 hover:bg-opacity-10">
                            <button>
                                <a href="#">
                                    <li className="pl-3 flex items-center">
                                        <FaDisplay className='size-7 text-blue-800' />
                                        <p className="ml-4">
                                            Video
                                        </p>
                                    </li>
                                </a>
                            </button>
                        </div>
                    </ul>
                </nav>

                {/* Right Side Bar */}
                <nav className="flex flex-col justify-between h-screen fixed w-80 right-0 rounded-lg text-sm hidden xl:flex">
                    <div className='py-20'>
                        <div>
                            <div className="py-3">
                                <ul className="flex justify-between">
                                    <li className="text-gray-500">Contacts</li>
                                    {/* This is where search will go */}
                                    {/* <li className="mr-[6px] text-black cursor-pointer"></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 space-y-2">
                            <div className="flex items-center space-x-3 text-black">
                                <img className="w-[36px] h-[36px] rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                                <div className="">
                                    <p className="cursor-pointer">John Doe</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img className="w-[36px] h-[36px] rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                                <div className="">
                                    <p className="cursor-pointer">John Doe</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img className="w-[36px] h-[36px] rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                                <div className="">
                                    <p className="cursor-pointer">John Doe</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img className="w-[36px] h-[36px] rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                                <div className="items-center">
                                    <p className="cursor-pointer">John Doe</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img className="w-[36px] h-[36px] rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                                <div className="">
                                    <p className="cursor-pointer">John Doe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer py-4 space-y-2 text-gray-500 justify-self-end">
                        <footer>
                            <ul className="flex flex-wrap justify-items-start gap-2 text-sm pt-3">
                                <li className="hover:underline hover:underline-offset-4">About</li>
                                <li className="hover:underline hover:underline-offset-4">Help</li>
                                <li className="hover:underline hover:underline-offset-4">Press</li>
                                <li className="hover:underline hover:underline-offset-4">API</li>
                                <li className="hover:underline hover:underline-offset-4">Jobs</li>
                                <li className="hover:underline hover:underline-offset-4">Privacy</li>
                                <li className="hover:underline hover:underline-offset-4">Terms</li>
                                <li className="hover:underline hover:underline-offset-4">
                                    Locations
                                </li>
                                <li className="hover:underline hover:underline-offset-4">Language</li>
                            </ul>
                        </footer>
                        <div>
                            <p className="text-sm pt-1">&#169; 2024 Bracu Social App</p>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Sidebar