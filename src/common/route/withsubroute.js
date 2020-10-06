import React from "react";
// import { useAuth } from "../login/redux/hooks";
import {Route, Redirect} from "react-router-dom";

const WithSubRoutes = (route) => {
    const {isAuthenticated} = true

    if (route.meta.protected) {
        return (
            <Route
                path={route.path}
                render={(props) => {
                    return isAuthenticated ? (
                        <route.module {...props} routes={route.routes}/>
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {from: props.location},
                            }}
                        />
                    );
                }}
            />
        );
    } else {
        return (
            <Route
                path={route.path}
                render={(props) => (
                    <route.module {...props} routes={route.routes}/>
                )}
            />
        );
    }
};

export default WithSubRoutes;
