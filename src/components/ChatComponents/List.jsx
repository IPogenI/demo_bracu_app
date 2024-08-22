import axios from 'axios'
import { React, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'

function List({ list, setList, input, setCurrentConv, getConv }) {

    const [data, setData] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`/api/user`)
            setData(res.data)
        }
        fetchUsers()
    }, [])
    // Filtering Logic
    const filteredData = data.filter((elem) => {
        if (input === "") {
            return elem
        } else {
            return elem.username.toLowerCase().includes(input)
        }
    })

    const clickHandler = async (otherId) => {
        //setList(false)
        try {
            const res1 = await axios.post(`/api/conv/ifExists`, {
                userId1: user._id,
                userId2: otherId
            })

            if(res1.data?._id) {
                setCurrentConv(res1.data)
                return
            }
            const body_obj = {
                users : [user._id, otherId]
            }
            const res = await axios.post(`/api/conv`, body_obj)
            setList(false)
            getConv()
            setCurrentConv(res.data)
            
            console.log(res.data)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {
                list ? (
                    <>
                        <ul className='flex flex-col gap-2 w-[100%] h-screen text-lg px-4 py-3'>
                            {filteredData.map((item, index) => (
                                <li className='bg-gray-100 p-2 rounded-md cursor-pointer hover:bg-gray-200' key={index} onClick={() => {clickHandler(item._id)}}>{item.username}</li>
                            ))}
                        </ul>
                    </>
                ) : null
            }
        </>

    )
}

export default List