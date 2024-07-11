import React, { useState } from 'react';
import PostCreationModal from './PostCreationModal';


const PostCreation = () => {
    const [showModal, setShowModal] = useState(false)
    
    return (
        <>
            {/* Post Creation Modal */}
            {showModal ? (<PostCreationModal setShowModal={setShowModal} />) : null}

            <div className="card bg-white border-2 border-gray-300 rounded-lg">
                <div className="p-5">
                    <div className=" flex w-[100%]">
                        <div className="flex items-center text-center gap-1">
                            <div className="h-10 w-10 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                                <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col text-sm justify-center items-start w-[100%]'>
                            <button onClick={() => setShowModal(true)} className="text-start text-gray-500 text-base rounded-full createPost ml-2 bg-gray-200 p-2 w-inherit w-[100%]">
                                What's on your mind, Joe?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCreation