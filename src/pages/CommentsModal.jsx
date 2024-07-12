import React from 'react'
import { FaEllipsisH, FaArrowUp, FaArrowDown, FaRegComment, FaShare } from 'react-icons/fa'

const CommentsModal = ({ post, setShowComments, current_time }) => {
    return (
        <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none bg-black opacity-50"></div>

            {/* Post */}
            <div className="fixed card bg-white border-2 border-gray-300 rounded-lg -ml-3.5">
                <div className="postDetails p-3 max-w-2xl">

                    {/* Profile Pic With Name and Time of Post */}
                    <div className="flex flex-row justify-between items-start text-center gap-1 mb-4">
                        <div className='flex gap-2'>
                            <div className="h-10 w-10 wrapper rounded-full border-2 border-black overflow-hidden">
                                <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                            </div>

                            <div className='flex flex-col text-sm justify-start items-start'>
                                <p className="text-black font-semibold">
                                    {post.name}
                                </p>
                                <p className="font-thin cursor-pointer">{current_time(post.createdAt)}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="font-thin text-sm">
                            {post.caption}
                        </p>
                    </div>
                </div>

                {/* Image Viewing Section */}
                <div>
                    <div>
                        <img className="w-[100%]" src="https://picsum.photos/600/400/?random" alt="" />
                    </div>
                </div>

                {/* Show Reaction Count and Who Reacted */}
                <div className="flex flex-row justify-between items-center px-3 py-3 space-x-3">
                    <div className="flex flex-row items-center gap-2 reactionCount">
                        <FaArrowUp />
                        <p className="text-gray-400 text-sm">
                            You, John Doe and 30 others
                        </p>
                    </div>

                    <div className="comments">
                        <p className="text-gray-400 text-sm">
                            {`${post.commentCount} Comments`}
                        </p>
                    </div>
                </div>

                {/* React Section */}
                <div className='reactions'>
                    <div className="pt-3 pb-2">
                        <ul className=" flex text-gray-500 text-base justify-around">
                            <li className='flex gap-1 justify-items-center items-center'>
                                <FaArrowUp className='cursor-pointer' />
                                <p className='px-2'>{post.upVotes}</p>
                                <FaArrowDown className='cursor-pointer' />
                            </li>
                            <li className='flex gap-1 justify-items-center items-center cursor-pointer'>
                                <FaRegComment />
                                <button className="comments" onClick={() => { setShowComments(true) }}>
                                    Comment
                                </button>
                            </li>
                            <li className='flex gap-1 justify-items-center items-center cursor-pointer'>
                                <FaShare />
                                <p>Share</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Show Some Comments */}
                <div className="comments">
                    <p className="text-gray-400 text-sm pt-2">
                        Sort Them by Something
                    </p>
                    {post.comments.map((comment, index) => {
                        return (
                            <div className="flex commenter py-4 px-2 gap-2" key={ index }>
                                <div className="h-10 w-10 wrapper rounded-full border-2 border-black overflow-hidden">
                                    <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                                </div>
                                <div className='flex flex-col text-sm justify-start items-start'>
                                    <p className="text-black font-normal text-sm">
                                        {comment.name}
                                    </p>
                                    <p className="text-black font-normal text-sm">
                                        {comment.comment}
                                    </p>
                                </div>
                            
                            </div>

                        )
                    })}


                </div>

            </div>
        </>
    )
}

export default CommentsModal