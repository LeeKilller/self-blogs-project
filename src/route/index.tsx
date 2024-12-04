
import { createBrowserRouter } from "react-router";
import { Navigate } from "react-router";
import PageException from "@/views/PageException";
import type { RouteObject } from "react-router";

const rootRoute: RouteObject [] = [
    {
        index:true,
        element:<Navigate to='/404' />
    },
    {
        path:'*',
        element: <Navigate to='/404' />
    },
    {
        path:'/404',
        element:<PageException />,
        loader:() => ({status:'404'})
    },
]


export default createBrowserRouter(rootRoute);