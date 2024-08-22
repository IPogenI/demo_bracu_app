import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom'
import React, { useContext } from 'react'
import MainLayout from './layouts/MainLayout'
import NewsFeedPosts from './pages/NewsFeedPosts.jsx'
import { AuthContext } from './contexts/AuthContext/AuthContext.jsx'
import Login from './pages/authPages/login/Login.jsx'
import Register from './pages/authPages/register/Register.jsx'
import Chat from './pages/Chat.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
const App = () => {

  const { user } = useContext(AuthContext)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={user ? <MainLayout /> : <Navigate to="/login" />}>
          <Route index element={<NewsFeedPosts />} />
          <Route path ="/profilePage" element={<ProfilePage />} />
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/jobs" element={<JobsPage />} /> */}
          {/* <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} /> */}
          {/* <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} /> */}
          {/* <Route path="/jobs/:id" element={<JobPage deleteJob={ deleteJob } />} loader={jobLoader} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
        
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} ></Route>
      </>

    )
  )

  return <RouterProvider router={router} />
}

export default App