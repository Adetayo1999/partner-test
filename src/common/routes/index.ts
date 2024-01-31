import { lazy } from 'react';
import { PATHS } from './paths';

const loadModules = (module: string, page: string) => {
	return lazy(() => import(`../../modules/${module}/pages/${page}/index.tsx`));
};


const routes = [
    {
        path: PATHS.auth.login,
        Component: loadModules("auth", "login"),
        access: "guest-only"
    },
    {
        path: PATHS.protected.home,
        Component: loadModules("dashboard", "summary"),
        access: "loggedin-user"
    },
    {
        path: PATHS.protected.merchants,
        Component: loadModules("dashboard", "merchants"),
        access: "loggedin-user"
    },
    {
        path: PATHS.protected.transactions,
        Component: loadModules("dashboard", "transactions"),
        access: "loggedin-user"
    },
    {
        path: PATHS.protected.resolution_center,
        Component: loadModules("dashboard", "resolution_center"),
        access: "loggedin-user"
    },
]

export default routes;