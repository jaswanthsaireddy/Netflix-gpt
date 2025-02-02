import React, { useEffect } from 'react'
import Browse from './Browse'
import SignInPage from './SignInPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

    const dispatch = useDispatch();

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