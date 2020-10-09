import React from "react";
import LeftSideComponent from "./leftside.component";
import {renderRoute} from "../../common/route/menu.route";

const LeftSideModule = () => {
    const menuRoutes = renderRoute();


    console.log("menu route route route route", menuRoutes)
    return (
        <>
            {menuRoutes.map((route, index) => {
                return (
                    <LeftSideComponent key={index} text={route.meta.text} path={route.path}
                                       routes={route.routes || []}/>
                )
            })}
        </>

    )
}


export default LeftSideModule;
