import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Error from '../pages/error/Error';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>
    },
    {
        path: "/home",
        element: <Home/>
    }
]);

export default router;