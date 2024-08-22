import React, { useState, useRef, useEffect, useContext } from 'react'
import ProfilePictureModal from './ProfilePictureModal'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'

const ProfileHeader = () => {
    const [showModal, setShowModal] = useState(false)
    const { user } = useContext(AuthContext)
    const [drop, setDrop] = useState(false)
    const btnRef = useRef(null)
    console.log(user)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (btnRef.current && !btnRef.current.contains(e.target)) {
                setDrop(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setDrop]);


    return (
        <>
            <div>
                <div className=" w-full flex justify-center w-80" style={{ height: '348px' }}>
                    <div className="flex flex-col">
                        <div className="md:relative bg-gray-100 md:rounded-bl-lg md:rounded-br-lg
                        bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400"
                            style={{ width: '940px', height: '348px' }}>

                        </div>
                        <div className="absolute w-[100%]">
                            <img src={user.profilePicture} className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-200 dark:border-gray-200 dark:hover:border-gray-200 dark:hover:bg-gray-200 md:rounded-full md:absolute top-48 inset-x-96 border-4 border-white w-40 h-40" style={{ width: '168px', height: '168px' }} onClick={() => { setDrop(true) }} />
                        </div>
                        <div className='relative' ref={btnRef}>
                            {drop ? (
                                <>
                                    <div className='btns flex flex-col bg-gray-100 items-start absolute w-72 top-0 left-[35%] mt-4 text-sm rounded-md' onClick={() => {setDrop(false)}}>
                                        <button className='px-3 py-2 hover:bg-gray-200 w-[100%] text-left rounded-md'>View Profile Picture</button>
                                        <button className='px-3 py-2 hover:bg-gray-200 w-[100%] text-left rounded-md' onClick={() => { setShowModal(true) }}>Choose Profile Picture</button>
                                    </div>
                                </>
                            ) : null}
                        </div>

                    </div>
                </div>
                <div className="flex justify-center flex-col mt-5 mb-3.5">
                    <h1 className="text-center font-bold text-3xl">Can Canbolat</h1>
                    <a href="#" className="text-center text-blue-700 font-semibold">Add Bio</a>
                    <hr className="full flex self-center w-2/3 mt-2" />
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex justify-between mb-2.5">
                        <ul className="flex px-5 py-1.5">
                            <li className="px-3 font-semibold text-gray-600"><a href="#">Posts</a></li>
                            <li className="px-3 font-semibold text-gray-600"><a href="#">About</a></li>
                            <li className="px-3 font-semibold text-gray-600"><a href="#">Friends</a></li>
                            <li className="px-3 font-semibold text-gray-600"><a href="#">Photos</a></li>
                            <li className="px-3 font-semibold text-gray-600"><a href="#">Story Archive</a></li>
                            <li className="px-3 font-semibold text-gray-600"><a href="#">More</a></li>
                        </ul>
                        <ul className="flex mb:pl-14">
                            <li className="px-2 font-semibold">
                                <button className="bg-blue-600 px-5 py-1 rounded-lg text-white font-semibold">
                                    <i className="bx bx-plus-circle text-xl mr-2"></i>
                                    Add to Story
                                </button>
                            </li>
                            <li className="px-2 font-semibold">
                                <button className="bg-gray-200 px-5 py-1 rounded-lg text-black font-semibold">
                                    <i className="bx bx-edit-alt mr-2 text-xl"></i>
                                    Edit Profile
                                </button>
                            </li>
                            <li className="px-2 font-semibold">
                                <button className="bg-gray-200 px-3 py-1 rounded-lg text-black font-semibold">
                                    ...
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
            {showModal ? (<ProfilePictureModal setShowModal={setShowModal} />) : null}
        </>
    )
}

export default ProfileHeader