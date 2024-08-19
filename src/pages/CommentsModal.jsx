import { React, useState, useEffect, useRef, useContext } from 'react'
import { FaArrowUp, FaArrowDown, FaRegComment, FaShare } from 'react-icons/fa'
import CreateComment from '../components/CreateComment';
import axios from 'axios';
import { BiSolidDownvote, BiSolidUpvote } from 'react-icons/bi';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const CommentsModal = ({ post, current_time, setShowComments, getPost, postData }) => {
    const {user} = useContext(AuthContext)
    const modalRef = useRef(null);
    const [postComments, setPostComments] = useState([])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setShowComments(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setShowComments]);

    const fetchComments = async () => {
        try {
            const res = await axios.get("/api/comment", {
                params: {
                    postId: post._id
                }
            })
            setPostComments(res.data)
            getPost()
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchComments()
    }, [])


    return (
        <>
            <div id='outElem' className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none bg-black opacity-50"></div>

            {/* Post */}
            <div ref={modalRef} className="fixed w-[580px] max-w-full card bg-white shadow-2xl rounded-lg z-50">
                <div className="postDetails p-3">

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

                {/* Image Viewing Section; Made Responsive */}
                <div>
                    <img
                        className="w-full max-w-xl object-contain"
                        src={post.imageUrl}
                        alt="Something"
                    />
                </div>

                {/* Show Reaction Count and Who Reacted */}
                <div className="flex flex-row justify-between items-center px-3 py-3 space-x-3">
                    <div className="flex flex-row items-center gap-2 reactionCount">
                        <FaArrowUp />
                        <p className="text-gray-400 text-sm">
                            {`${postData?.upVotes.length + postData?.downVotes.length} votes`}
                        </p>
                    </div>

                    <div className="comments">
                        <p className="text-gray-400 text-sm">
                            {`${postData?.commentCount} Comments`}
                        </p>
                    </div>
                </div>

                {/* React Section */}
                <div className='reactions'>
                    <div className="pt-3 pb-2">
                        <ul className=" flex text-gray-500 text-base justify-around">
                            <li className='flex gap-1 justify-items-center items-center'>
                                <BiSolidUpvote size="20" color={postData.upVotes.includes(user.username) ? "blue" : "grey"} className='cursor-pointer'/>
                                <p className='px-2'>{postData?.upVotes?.length}</p>
                                <BiSolidDownvote size="20" color={postData.downVotes.includes(user.username) ? "red" : "grey"} className='cursor-pointer'/>
                                <p className='px-2'>{postData?.downVotes?.length}</p>
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

                {/*Create Comment*/}
                <CreateComment post={post} onCommentChange={fetchComments} />


                {/* Show Some Comments */}
                <div className="comments">
                    <p className="text-gray-400 text-sm pt-2">
                        Sort Them by Something
                    </p>
                    {postComments.map((comment, index) => {
                        return (
                            <div className="flex commenter py-4 px-2 gap-2" key={index}>
                                <div className="h-10 w-10 wrapper rounded-full border-2 border-black overflow-hidden">
                                    <img className="w-full h-full object-contain" src={comment.authorImage || "https://randomuser.me/api/portraits/men/1.jpg"} alt="" />
                                </div>
                                <div className='flex flex-col text-sm justify-start items-start'>
                                    <p className="text-black font-normal text-sm">
                                        {comment.author}
                                    </p>
                                    <p className="text-black font-normal text-sm">
                                        {comment.content}
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