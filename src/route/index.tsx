import { createBrowserRouter, Navigate } from "react-router";
import type { RouteObject } from "react-router";
import { genFullPath } from "./utils";
import {
    PageException,
    Login
} from "@/views";

const metaRoutes = import.meta.glob('./routes/*.tsx', { eager: true }) as Record<string,any>;

const metaRouteList: RouteObject[] = [];

Object.keys(metaRoutes).forEach(key => {
    const module = metaRoutes[key].default || {};
    const moduleList = Array.isArray(module) ? [...module] : [module];

    genFullPath(moduleList);

    metaRouteList.push(...moduleList);
})

const rootRoute: RouteObject[] = [
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
    ...metaRouteList
]


export default createBrowserRouter(rootRoute);