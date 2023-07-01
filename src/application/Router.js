import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Error from '../pages/error/Error';
import SignIn from '../pages/signIn/SignIn';
import LogIn from '../pages/login/LogIn';
import Countries from '../pages/countries/Countries';
import Continents from '../pages/continents/Continents';
import PrivateRoutes from '../utils/PrivateRoutes';

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
        element: <PrivateRoutes><Continents/></PrivateRoutes>
    },
    {
        path: "/countries",
        element: <PrivateRoutes><Countries/></PrivateRoutes>
    }
]);

export default router;