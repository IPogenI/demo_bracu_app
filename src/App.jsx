import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout'
import NewsFeedPosts from './pages/NewsFeedPosts'

const App = () =>{
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<NewsFeedPosts />} />
      {/* <Route path="/jobs" element={<JobsPage />} /> */}
      {/* <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} /> */}
      {/* <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} /> */}
      {/* <Route path="/jobs/:id" element={<JobPage deleteJob={ deleteJob } />} loader={jobLoader} /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>
  )
)

return <RouterProvider router={router}/>
}

export default App