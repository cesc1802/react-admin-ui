import React from "react"
import LoginModule from "../../features/login/login.module";

const appRoutes = [
    {
        path: "/login",
        component: LoginModule,
        meta: {
            isProtected: false
        }
    }
]

export default appRoutes;
