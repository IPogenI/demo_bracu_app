import { React, useState } from 'react'
import data from "./ListData.json"

function List({ list, setList, input }) {

    // Filtering Logic
    const filteredData = data.filter((elem) => {
        if (input === "") {
            return elem
        } else {
            return elem.text.toLowerCase().includes(input)
        }
    })

    return (
        <>
            {
                list ? (
                    <>
                        <ul className='flex flex-col gap-2 w-[100%] h-screen text-lg px-4 py-3'>
                            {filteredData.map((item) => (
                                <li className='bg-gray-100 p-2 rounded-md cursor-pointer hover:bg-gray-200' key={item.id} onClick={() => { setList(false) }}>{item.text}</li>
                            ))}
                        </ul>
                    </>
                ) : null
            }
        </>

    )
}

export default List