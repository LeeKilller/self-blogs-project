import type { RouteObject } from "react-router";
import { Navigate } from "react-router";
import { AdminLayout } from "@/layout";
import LazyLoad from "@/components/LazyLoad";
import { lazy } from "@loadable/component";
import analyseRoutes from "./analyse";

const adminRoutes: RouteObject[] = [
    {
        path:'/admin',
        element:<AdminLayout />,
        children:[
            {
                path:'edit',
                element:LazyLoad(lazy(() => import('@/views/EditPage')))
            },
            {
                index:true,
                element:<Navigate to={'/admin/analyse'} />
            },
            {
                path:'darfts',
                element:LazyLoad(lazy(() => import('@/views/Drafts')))
            },
            {
                path:'articles',
                element:LazyLoad(lazy(() => import('@/views/Articles')))
            },
            {
                path:'picture',
                element:LazyLoad(lazy(() => import('@/views/Pictures')))
            },
            {
                path:'analyse',
                element:LazyLoad(lazy(() => import('@/views/Analyse'))),
                children:[
                    ...analyseRoutes
                ]
            }
        ]
    }
]


export default adminRoutes;