import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Error from '../pages/error/Error';
import SignIn from '../pages/signIn/SignIn';
import LogIn from '../pages/login/LogIn';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>
    },
    {
        path: "/signin",
        element: <SignIn/>
    },
    {
        path: "/login",
        element: <LogIn/>
    }
    

]);

export default router;