import { createBrowserRouter, Navigate } from "react-router";
import type { RouteObject } from "react-router";
import {
    PageException,
    Login
} from "@/views";

const rootRoute: RouteObject[] = [
    {
        index: true,
        element: <Navigate to='/404' />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <Navigate to='/404' />
    },
    {
        path: '/404',
        element: <PageException />,
        loader: () => ({ status: '404' })
    },

]


export default createBrowserRouter(rootRoute);