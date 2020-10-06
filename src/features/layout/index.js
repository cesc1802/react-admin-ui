import React from "react";
import PrivateLayout from "./private.layout";
import PublicLayout from "./public.layout";
import RenderRoute from "../../common/route";
import mainMenus from "../../common/route/menu.route";
import appRoutes from "../../common/route/app.route";

const RootLayout = () => {
    const {isAuthenticated} = true;

    if (isAuthenticated) {
        return (
            <PrivateLayout>
                <RenderRoute menuRoutes={mainMenus} appRoutes={appRoutes}/>
            </PrivateLayout>
        )
    } else {
        return (
            <PublicLayout>
                <RenderRoute menuRoutes={mainMenus} appRoutes={appRoutes}/>
            </PublicLayout>
        )
    }
}

export default RootLayout
