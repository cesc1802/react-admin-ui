import React from "react"
import {Switch} from "react-router-dom"
import WithSubRoutes from "./withsubroute";

const RenderRoute = ({menuRoutes, appRoutes}) => {
    return (
        <React.Fragment>
            <Switch>
                {menuRoutes.map((route, i) => (
                    <WithSubRoutes key={i} {...route} />
                ))}
                {appRoutes.map((route, i) => (
                    <WithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </React.Fragment>
    );
}

export default RenderRoute;
