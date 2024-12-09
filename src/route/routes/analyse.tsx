import type { RouteObject } from "react-router";
import LazyLoad from "@/components/LazyLoad";
import { lazy } from "@loadable/component";


const analyseRoutes: RouteObject[] = [
    {
        index:true,
        element: LazyLoad(lazy(()=>import("@/views/OverView")))
    }
]


export default analyseRoutes;