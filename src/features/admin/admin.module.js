import React from "react";
import {Switch} from "react-router";
import WithSubRoutes from "../../common/route/withsubroute";

const AdminModule = ({routes}) => {
    return (
        <>
            <Switch>
                {routes.map((route, i) => (
                    <WithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </>
    );
};

export default AdminModule;
