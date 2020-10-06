import React from "react"
import DrawerComponent from "./drawer.component";

const DrawerModule = ({open, handleDrawerClose, children}) => {
    return (
        <DrawerComponent open={open} handleDrawerClose={handleDrawerClose}>{children}</DrawerComponent>
    )
}

export default DrawerModule;
