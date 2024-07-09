import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
            {/* <ToastContainer /> */}
        </>
    )
}

export default MainLayout