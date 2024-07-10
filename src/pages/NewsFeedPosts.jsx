import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsFeedPost from './NewsFeedPost'
//import posts from '../posts.json'
import PostCreation from './PostCreation'


// Need to fetch data here from database and send them to NewsFeedPost.jsx


const NewsFeedPosts = () => {

    const [posts, newPost] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/getPost")
        .then((result) => newPost(result.data))
        .catch((error) => console.log(error))

    }, [])


    return (
        <>
            <div className="posts pt-24 flex flex-col bg-gray-100">
                <div className="flex justify-center flex-none">
                    <section className="flex flex-col max-w-xl gap-5">
                        {/* Story/Day of Friends */}
                        <div className="stories py-4">
                            <div className="bg-white border-2 border-gray-300 rounded-lg ">
                                <div className="flex py-2 justify-between px-4">

                                    <div className="text-center">
                                        <div className="rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
                                            <div className="h-14 w-14 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                                                <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <p className="text-black text-xs pb-2 pt-1">John Doe</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
                                            <div className="h-14 w-14 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                                                <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <p className="text-black text-xs pb-2 pt-1">John Doe</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
                                            <div className="h-14 w-14 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                                                <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
                                            </div>
                                        </div>
                                        <p className="text-black text-xs pb-2 pt-1">John Doe</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
                                            <div className="h-14 w-14 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                                                <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
                                            </div>
                                        </div>
                                        <p className="text-black text-xs pb-2 pt-1">John Doe</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
                                            <div className="h-14 w-14 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                                                <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/5.jpg" alt="" />
                                            </div>
                                        </div>
                                        <p className="text-black text-xs pb-2 pt-1">John Doe</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
                                            <div className="h-14 w-14 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                                                <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/6.jpg" alt="" />
                                            </div>
                                        </div>
                                        <p className="text-black text-xs pb-2 pt-1">John Doe</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
                                            <div className="h-14 w-14 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                                                <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/7.jpg" alt="" />
                                            </div>
                                        </div>
                                        <p className="text-black text-xs pb-2 pt-1">John Doe</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
                                            <div className="h-14 w-14 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                                                <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/8.jpg" alt="" />
                                            </div>
                                        </div>
                                        <p className="text-black text-xs pb-2 pt-1">John Doe</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <PostCreation/>

                        {/* Iterating over data to create posts */}
                        {
                            posts.map((post, index) => (
                                <NewsFeedPost key={index} post={post} />
                            ))
                        }
                    </section>
                </div>
            </div >
        </>
    )
}

export default NewsFeedPosts