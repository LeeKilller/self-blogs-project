import type { RouteObject } from "react-router";
import { AdminLayout } from "@/layout";


const adminRoutes: RouteObject[] = [
    {
        path:'/admin',
        element:<AdminLayout />,
        children:[
            
        ]
    }
]


export default adminRoutes;