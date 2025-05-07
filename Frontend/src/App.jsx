import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Myaccount from './pages/Myaccount'
import Promotional from './components/Promotional'




const App = () => {

  const Layout = () => {

    return(
      <div>
        <Promotional/>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([

    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/myaccount',
          element:<Myaccount/>
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
