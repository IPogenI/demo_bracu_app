import React from 'react'
import logo from '../assets/images/bracLogo.png'
import { NavLink } from 'react-router-dom'
import { FaBell, FaUsers } from 'react-icons/fa'

const Navbar = () => {
    const linkClass = ({ isActive }) => isActive ? 'bg-gray-50 text-blue-800 hover:bg-gray-500 hover:text-white rounded-full p-3' : 'hover:bg-stone-500 hover:text-black rounded-full text-lg px-3'

    return (
        <>
            <div className='fixed w-screen bg-blue-800 z-50'>
                <nav className="">
                    <div className="mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="flex h-20 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                                {/* <!-- Logo --> */}
                                <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                                    <div className="logo bg-white rounded-full">
                                        <img className="h-10 w-auto rounded-full" src={logo} alt="Bracu Social App" />
                                    </div>
                                    <span className="hidden md:block text-white text-2xl font-bold ml-2">
                                        Bracu Social App
                                    </span>
                                </NavLink>

                                {/* Nav Icons */}
                                <div className="md:ml-auto">
                                    <div className="flex items-center justify-center space-x-3">
                                        <NavLink to="/" className={linkClass}>
                                            <FaUsers className='' />
                                        </NavLink>
                                        <NavLink to="/" className={linkClass}>
                                            <FaBell className='' />
                                        </NavLink>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Navbar