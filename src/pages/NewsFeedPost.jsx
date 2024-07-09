import React from 'react'
import { FaHeart, FaRegThumbsUp, FaRegComment, FaShare } from 'react-icons/fa'

const NewsFeedPost = ({ post }) => {
  return (
    <>
      
      {/* Posts */}
      <div className="card bg-white border-2 border-gray-300 rounded-lg">
        <div className="postDetails p-3">

          {/* Profile Pic With Name and Time of Post */}
          <div className="mb-4">
            <div className="flex flex-row items-center text-center gap-1">
              <div className="h-10 w-10 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
              </div>
              <div className='flex flex-col text-sm justify-center items-start'>
                <p className="text-black font-semibold pt-1">
                  {post.name}
                </p>
                <p className="font-thin cursor-pointer">{post.date}</p>
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
            <FaHeart />
            <p className="text-gray-400 text-sm">
              You, John Doe and 30 others
            </p>
          </div>

          <div className="comments">
            <p className="text-gray-400 text-sm">
              {post.commentCount}
            </p>
          </div>
        </div>

        {/* React Section */}
        <div className='reactions'>
          <div className="pt-3 pb-2">
            <ul className=" flex text-gray-500 text-base justify-around">
              <li className='flex gap-1 justify-items-center items-center cursor-pointer'>
                <FaRegThumbsUp />
                <p>Like</p>
              </li>
              <li className='flex gap-1 justify-items-center items-center cursor-pointer'>
                <FaRegComment />
                <p>Comment</p>
              </li>
              <li className='flex gap-1 justify-items-center items-center cursor-pointer'>
                <FaShare />
                <p>Comment</p>
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