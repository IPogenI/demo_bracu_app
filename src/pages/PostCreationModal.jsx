import { React, useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { render } from 'react-dom';

const PostCreationModal = ({ setShowModal, onCreation, onLoad }) => {
    const name = "Dummy User";
    const [caption, setCaption] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const textAreaRef = useRef(null)
    const [text, setText] = useState()
    const [imageURI, setImageURI] = useState(null);


    const postHandler = async () => {
        setShowModal(false)
        onLoad(true)
        // Handling Post Creation and Image Upload
        const formData = new FormData()
        formData.append('name', name)
        formData.append('caption', caption)

        if (selectedFile) {
            formData.append('file', selectedFile)
        }

        try {
            const upRes = await axios.post('http://localhost:3000/createPost', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })

            console.log("File uploaded successfully:", upRes)
            onCreation()
            //window.location.reload()

        } catch (error) {
            console.error('Error creating post:', error.response?.data || error.message);
        }
    }

    // Handling File Change
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setSelectedFile(file)

        const reader = new FileReader()
        reader.onload = (e) => {
            setImageURI(e.target.result)
        }
        reader.readAsDataURL(file)
    }


    // Fixing TextArea Scrolling Issue, Changing it to Resize Dynamically

    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
        setCaption(e.target.value)
    }

    useEffect(() => {
        textAreaRef.current.style.height = 'auto'
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
    }, [text])

    return (
        <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none bg-black opacity-50"></div>

            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
                <div className="relative w-[480px] mx-auto">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                            <div className=" flex w-[100%]">
                                <div className="flex text-center gap-1">
                                    <div className="h-10 w-10 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                                        <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                                    </div>
                                    <p className="text-black text-sm font-semibold pt-1 pl-1">John Doe</p>
                                </div>
                            </div>
                            <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowModal(false)}>
                                <span className="flex items-center justify-center text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 py-0 rounded-full">
                                    &#10006;
                                </span>
                            </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                            <form className="flex flex-col gap-2 w-full" onSubmit={(e) => e.preventDefault()}>
                                <textarea value={text} rows="2" type="text" placeholder="What's on your mind, Joe?" className="focus:outline-none resize-none overflow-hidden" onChange={handleChange} ref={textAreaRef}>
                                </textarea>



                                {imageURI? (
                                <div className='justify-center mt-4'>
                                    <p align='center'>Click on Image Preview to change Image</p>
                                    <img className='thumbnail w-full h-auto' src={imageURI} alt='Preview' onClick={() => document.getElementById('dropzone-file').click()} />
                                    <input id="dropzone-file" type="file" className='hidden' onChange={handleFileChange} />
                                </div>
                                ):  (
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-200 dark:border-gray-200 dark:hover:border-gray-200 dark:hover:bg-gray-200">

                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Add Photos/Videos</span> or drag and drop</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className='hidden' onChange={handleFileChange} />
                                    </label>
                                </div>
                                )}

                            </form>
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button className="text-white bg-blue-800 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100%]"
                                type="button"
                                onClick={postHandler}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCreationModal