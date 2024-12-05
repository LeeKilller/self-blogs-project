import type { RouteObject } from "react-router";
import { CustomLayout } from "@/layout";
import { Home, About, Tags, TimeLine } from "@/views";

const customRoutes: RouteObject[] = [
    {
        path:'/',
        element: <CustomLayout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'/tags',
                element:<Tags />
            },
            {
                path:'/timeline',
                element:<TimeLine />
            },
            {
                path:'/about',
                element:<About />
            }
        ]
    }
]


export default customRoutes;