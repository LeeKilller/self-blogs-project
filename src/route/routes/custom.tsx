import type { RouteObject } from "react-router";
import { CustomLayout } from "@/layout";
import { Home, About, Tags, TimeLine } from "@/views";
import LazyLoad from "@/components/LazyLoad";
import { lazy } from "@loadable/component";

const customRoutes: RouteObject[] = [
    {
        path:'/',
        element: <CustomLayout />,
        children:[
            {
                index:true,
                element:LazyLoad(lazy(()=>import('@/views/Home')))
            },
            {
                path:'/tags',
                element:LazyLoad(lazy(()=>import('@/views/Tags')))
            },
            {
                path:'/timeline',
                element:LazyLoad(lazy(()=>import('@/views/TimeLine')))
            },
            {
                path:'/about',
                element:LazyLoad(lazy(()=>import('@/views/About')))
            }
        ]
    }
]


export default customRoutes;