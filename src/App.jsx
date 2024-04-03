
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route paht="/" element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )

)


const App = () => {
  return  <RouterProvider router={router} />  
  
}


export default App
