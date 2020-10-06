import React from "react";
// import { useAuth } from "../login/redux/hooks";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = true;

    return (
        <Route
            {...rest}
            render={props => {
                return isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                );
            }}
        />
    );
};

export default PrivateRoute;
