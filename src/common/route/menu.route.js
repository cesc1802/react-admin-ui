import React from "react";
import HomeModule from "../../features/home/home.module";
import AdminModule from "../../features/admin/admin.module";
import RoleModule from "../../features/role/role.module";
import PermissionModule from "../../features/permission/permission.module";
import MenuModule from "../../features/menu/menu.module";

const mainMenus = [
    {
        path: "/trang-chu",
        module: HomeModule,
        meta: {
            text: 'Trang chủ',
            protected: false,
        }
    },
    {
        path: "/quan-tri",
        module: AdminModule,
        meta: {
            text: 'Quản trị',
            protected: false
        },
        routes: [
            {
                path: "/quan-tri/roles",
                module: RoleModule,
                meta: {
                    text: 'Roles',
                    protected: false
                },
            },
            {
                path: "/quan-tri/permission",
                module: PermissionModule,
                meta: {
                    text: 'Permission',
                    protected: false
                },
            },
            {
                path: "/quan-tri/menu",
                module: MenuModule,
                meta: {
                    text: 'Menu',
                    protected: false
                },
            },
        ]
    }
]
export const findRouteByPathName = (pathName, _routes = mainMenus) => {
    for (let index = 0; index < _routes.length; index++) {
        const route = _routes[index];
        if (route.path === pathName) return route.meta || {};
        if (pathName.startsWith(route.path))
            return findRouteByPathName(pathName, route.routes);
    }
    return {};
};

export const renderRoute = (_routes = mainMenus) => {
    let navbarConfig = [];
    for (let index = 0; index < _routes.length; index++) {
        const route = _routes[index];
        if (route.routes === undefined) {
            navbarConfig.push({ path: route.path, meta: route.meta });
        } else {
            navbarConfig.push({
                path: route.path,
                meta: route.meta,
                routes: renderRoute(route.routes),
            });
        }
    }
    return navbarConfig;
};

export default mainMenus;

