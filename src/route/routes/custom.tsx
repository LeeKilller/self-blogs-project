import type { RouteObject } from "react-router";
import { CustomLayout } from "@/layout";
import { Home } from "@/views";

const customRoutes: RouteObject[] = [
    {
        path:'/',
        element: <CustomLayout />,
        children:[
            {
                index:true,
                element:<Home />
            }
        ]
    }
]


export default customRoutes;