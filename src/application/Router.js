import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Error from '../pages/error/Error';
import SignIn from '../pages/signIn/SignIn';
import LogIn from '../pages/login/LogIn';
import AlertPage from '../pages/alertPage/AlertPage';
import Countries from '../pages/countries/Countries';

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
    },
    {
        path: "/alert",
        element: <AlertPage/>
    },
    {
        path: "/countries",
        element: <Countries/>
    }
]);

export default router;