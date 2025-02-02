import React from 'react'
import Browse from './Browse'
import SignInPage from './SignInPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const Body = () => {


    const appRouter = createBrowserRouter([{
        path:"/",
        element:<SignInPage/>},

        {path:"/browse",
        element:<Browse/>
    }])

    


  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body