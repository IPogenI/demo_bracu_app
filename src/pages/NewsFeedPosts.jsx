import React from 'react'
import NewsFeedPost from './NewsFeedPost'
import posts from '../posts.json'


// Need to fetch data here from database and send them to NewsFeedPost.jsx


const NewsFeedPosts = () => {
    return (
        <>
            <div className="posts pt-24 flex flex-col bg-gray-100">
                <div className="flex justify-center flex-none">
                    <section className="flex flex-col max-w-xl gap-5">

                        {/* Iterating over data to create posts */}
                        {
                            posts.map((post) => (
                                <NewsFeedPost key={post.id} post={post} />
                            ))
                        }
                    </section>
                </div>
            </div >
        </>
    )
}

export default NewsFeedPosts