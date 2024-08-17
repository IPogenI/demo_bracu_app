import React, { useState, useRef, useEffect } from 'react'
import { BsThreeDots } from "react-icons/bs"
import List from "../List"

const SidebarHeader = () => {
    const [drop, setDrop] = useState(false)
    const [show, setShow] = useState(false)
    const arr = [{ name: "Prottoy Roy" }, { name: "Shehran Rahman" }]
    const [list, setList] = useState(false)
    const listRef = useRef(null)

    // Handling Outside Clicks
    useEffect(() => {
        const handleClickOutside = (e) => {
          if (listRef.current && !listRef.current.contains(e.target)) {
            setList(false);
          }
        }
        document.body.addEventListener('click', handleClickOutside);
    
        return () => {
          document.body.removeEventListener('click', handleClickOutside);
        }
      }, [])


    //Handling User input from search bar
    const [inputText, setInputText] = useState("")
    const inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase)
    }

    const handleAdd = () => {
        setDrop(false)
        setShow(true)
    }

    const handleCheck = () => {
        setShow(false)
        setCheckedNames([])
    }

    const [checkedNames, setCheckedNames] = useState([]);
    console.log(checkedNames)

    // Handle checkbox change
    const handleCheckboxChange = (name, isChecked) => {
        if (isChecked) {
            // Add the name to the checkedNames array
            setCheckedNames(prev => [...prev, name]);
        } else {
            // Remove the name from the checkedNames array
            setCheckedNames(prev => prev.filter(n => n !== name));
        }
    };

    // JavaScript for showing/hiding the menu
    // const menuButton = document.getElementById('menuButton');
    // const menuDropdown = document.getElementById('menuDropdown');

    // menuButton.addEventListener('click', () => {
    //   if (menuDropdown.classList.contains('hidden')) {
    //     menuDropdown.classList.remove('hidden');
    //   } else {
    //     menuDropdown.classList.add('hidden');
    //   }
    // });

    // // Close the menu if you click outside of it
    // document.addEventListener('click', (e) => {
    //   if (!menuDropdown.contains(e.target) && !menuButton.contains(e.target)) {
    //     menuDropdown.classList.add('hidden');
    //   }
    // });
    return (
        <>
            <header className="flex p-4 border-b border-gray-300 flex justify-between items-center bg-blue-800 text-white">
                <h1 className="text-2xl font-semibold">Chats</h1>

                <div className="flex relative justify-end w-[100%]">
                    <button id="menuButton" className="focus:outline-none" onClick={() => { setDrop(!drop) }}>
                        <BsThreeDots />
                    </button>
                    {/* <!-- Menu Dropdown --> */}
                    {drop ? (
                        <div id="menuDropdown" className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                            <ul className="py-2 px-3" aria-labelledby="menuDropdown">
                                <li>
                                    <button href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400" onClick={handleAdd}>
                                        Create Group Conversation
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : null}

                    {/* User List to Add to Group Chat */}

                    {show ? (
                        <>
                            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none bg-black opacity-50 z-0">
                            </div>

                            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
                                <div className="relative w-[480px] mx-auto">
                                    <div className="flex flex-col items-center justify-center h-[480px] bg-gray-50 h-36 rounded-lg ">
                                        <div className="flex flex-col gap-3 text-black text-left mt-16 overflow-y-auto w-[100%] h-[480px] justify-start items-center">
                                            {arr.map((user, index) => (
                                                <div key={index} className="flex gap-3 user ">
                                                    <input
                                                        type="checkbox"
                                                        onChange={(e) => handleCheckboxChange(user.name, e.target.checked)}
                                                    />
                                                    <label className='flex gap-5'>
                                                        {user.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="flex h-[30%]">
                                        <button className='bg-blue-800 text-black p-2 rounded-md mt-2 justify-end self-end mb-5'>Create Conversation</button>
                                        </div>
                                        
                                    </div>
                                    <span className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 text-lg block bg-gray-300 rounded-full hover:bg-gray-400 cursor-pointer" onClick={() => { handleCheck() }}>
                                        &#10006;
                                    </span>
                                </div>
                            </div>
                        </>
                    ) : null}

                </div>
            </header>
            {/* Search bar */}
            <div className="main" ref={listRef}>
                <div className="flex justify-center search w-[100%] py-3">
                    <input
                        className='flex align-center text-black p-2 rounded-md bg-gray-200'
                        placeholder='Search'
                        id="outlined-basic"
                        variant="outlined"
                        onChange={inputHandler}
                        onClick={() => { setList(true) }}
                    />
                </div>
                <List list={list} setList={setList} input={inputText} />
            </div>
        </>

    )
}

export default SidebarHeader