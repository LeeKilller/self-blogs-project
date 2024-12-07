import type { RouteObject } from "react-router"

export const genFullPath = (routes: RouteObject[], parentPath = '') => {
    for(let i: number = 0; i < routes.length; i++) {
        const route = routes[i];

        if(route.index) continue;

        if(!route.path!.startsWith('/')) route.path = `${parentPath}/${route.path}`;

        if(route?.children?.length) genFullPath(route.children,route.path);
    }
}