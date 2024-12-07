import type { RouteObject } from "react-router";
import { AdminLayout } from "@/layout";
import {
    EditPage
} from '@/views'


const adminRoutes: RouteObject[] = [
    {
        path:'/admin',
        element:<AdminLayout />,
        children:[
            {
                path:'edit',
                element:<EditPage />
            }
        ]
    }
]


export default adminRoutes;