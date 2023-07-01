import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Error from '../pages/error/Error';
import SignIn from '../pages/signIn/SignIn';
import LogIn from '../pages/login/LogIn';
import Countries from '../pages/countries/Countries';
import Continents from '../pages/continents/Continents';

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
        path: "/continents",
        element: <Continents/>
    },
    {
        path: "/countries",
        element: <Countries/>
    }
]);

export default router;