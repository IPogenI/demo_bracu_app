import { React, useState, useEffect, useRef, useContext } from 'react'
import { FaEllipsisH, FaArrowUp, FaArrowDown, FaRegComment, FaShare } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import EditPostModal from './EditPostModal'
import CommentsModal from './CommentsModal'
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'
import { BiSolidDownvote, BiSolidUpvote } from 'react-icons/bi'

const NewsFeedPost = ({ post, onPostChange, onLoad }) => {
  const { user } = useContext(AuthContext)
  const dropDownRef = useRef(null)
  const [drop, setDrop] = useState(false)
  const [edit, setEdit] = useState(false)
  const [del, setDel] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [postData, setPostData] = useState()
  const [upvote, setUpvote] = useState(post.upVotes.includes(user.username))
  const [downvote, setDownvote] = useState(post.downVotes.includes(user.username))

  console.log(upvote, downvote)


  const isDropDisabled = (user.username !== post.name)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setDrop(false);
      }
    }
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    }
  }, [])

  const getPost = async () => {
    const res = await axios.get(`/api/post/${post._id}`)
    setPostData(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    
    getPost()
  }, [upvote, downvote])


  



  function current_time(creation_time) {
    const now = new Date();
    const converted_date = new Date(creation_time)

    const milliseconds = now - converted_date;
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (minutes < 1) {
      return "Just Now";
    } else if (hours < 1) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (days < 1) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (days < 7) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else {
      const this_year = now.getFullYear();
      const creation_year = converted_date.getFullYear();

      if (this_year === creation_year) {

        const same_year_option = {
          day: "numeric",
          month: "long",
        }

        return converted_date.toLocaleDateString("en-us", same_year_option)
      } else {
        const different_year_option = {
          day: "numeric",
          month: "long",
          year: "numeric"
        }

        return converted_date.toLocaleDateString("en-us", different_year_option)
      }
    }
  }
  const deletePostHandler = async () => {
    try {
      onLoad(true)
      const response = await axios.delete(`http://localhost:3000/post/${post._id}`)
      onPostChange()
      if (response.status == 200) {
        console.log("Post deleted successfully")
      } else {
        console.error("Failed to delete Post")
      }
    } catch (error) {
      console.error("Error: ", error)
    }

    setDel(false)
  }

  const handleImageClick = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const upvoteHandler = async (e) => {
    
    e.preventDefault()
    console.log(upvote, downvote)
    const res = await axios.post(`/api/vote`, {
      postId: post._id,
      username: user.username,
      upvote: !upvote,
      downvote: false
    })
    setUpvote(!upvote)
    setDownvote(false)
    console.log(upvote, downvote)
    //setVote()
  }

  const downvoteHandler = async (e) => {
    e.preventDefault()
    const res = await axios.post(`/api/vote`, {
      postId: post._id,
      username: user.username,
      upvote: false,
      downvote: !downvote
    })
    setDownvote(!downvote)
    setUpvote(false)
    //setVote()
  }





  return (
    <>
      {edit ? (<EditPostModal post={post} setEdit={setEdit} current_time={current_time} onPostChange={onPostChange} onLoad={onLoad} />) : null}
      {showComments ? (<CommentsModal current_time={current_time} post={post} setShowComments={setShowComments} getPost={getPost} postData={postData}/>) : null}

      {/* Posts */}
      <div className="card bg-white shadow-md rounded-lg">
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
                <div className="font-thin cursor-context-menu">{
                  (post.createdAt === post.updatedAt) ?
                    <p className='text-gray-500'>
                      {current_time(post.createdAt)}
                    </p>
                    :
                    <p className='text-gray-500'>
                      {`${current_time(post.createdAt)}`}
                      <strong className='ml-2'>Edited</strong>
                    </p>
                }</div>
              </div>
            </div>

            <div className="options relative">
              <button id='dropDown' data-dropdown-toggle="dropDownPostOptions" type="button" onClick={() => { setDrop(!drop) }} ref={dropDownRef} disabled={isDropDisabled}>
                <FaEllipsisH />
              </button>

              {/* PostOptionsDropDown */}
              {del ? (
                <>
                  <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none bg-black opacity-50">
                  </div>

                  <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
                    <div className="relative w-[480px] mx-auto">
                      <div className="flex flex-col items-center justify-center w-full bg-gray-50 h-36 gap-3 rounded-lg">
                        <p>Are you sure?</p>
                        <div className="btns flex gap-4">
                          <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={deletePostHandler}>Yes</button>
                          <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => { setDel(false) }}>No</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

              {drop ? (
                <>
                  <div id="dropDownPostOptions" className="absolute right-0 bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-32">
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropDownPostOptions">
                      <li>
                        <button type="button" onClick={() => { setEdit(true) }} className='block py-2 hover:bg-green-500 w-[100%]'>
                          Edit
                        </button>
                      </li>
                      <li>
                        <button type="button" onClick={() => { setDel(true) }} className='block py-2 hover:bg-red-500 w-[100%]'>
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : null}

            </div>
          </div>

          <div>
            <p className="font-thin text-sm">
              {post.caption}
            </p>
          </div>
        </div>

        {/* ImageLightBox Modal */}
        {isLightboxOpen ? (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            onClick={closeLightbox}>
            <div className="relative">
              <img
                className="max-w-4xl max-h-4xl object-contain"
                src={post.fullSizeImageUrl || post.imageUrl}
                alt="Full size" />
              <div className='absolute top-0 right-0 m-4'>
                <span className="flex items-center justify-center h-8 w-8 text-lg block bg-gray-300 rounded-full hover:bg-gray-400 cursor-pointer" onClick={closeLightbox}>
                  &#10006;
                </span>
              </div>

            </div>
          </div>
        ) : null}

        {/* Image Viewing Section */}
        <div>
          <div className='bg-black'>
            <img className="w-[100%] cursor-pointer hover:opacity-80" src={post.imageUrl} alt="" onClick={handleImageClick} />
          </div>
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
                <BiSolidUpvote size="20" color={upvote ? "blue" : "grey"} className='cursor-pointer' onClick={upvoteHandler} />
                <p className='px-2'>{postData?.upVotes?.length}</p>
                <BiSolidDownvote size="20" color={downvote ? "red" : "grey"} className='cursor-pointer' onClick={downvoteHandler} />
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

        {/* Show Some Comments */}

      </div>

    </>
  )
}

export default NewsFeedPost