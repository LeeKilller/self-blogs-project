import type { RouteObject } from "react-router";
import { AdminLayout } from "@/layout";
import LazyLoad from "@/components/LazyLoad";
import { lazy } from "@loadable/component";

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
                path:'analyse',
                element:LazyLoad(lazy(() => import('@/views/Analyse')))
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
            }
        ]
    }
]


export default adminRoutes;