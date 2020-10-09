import React, {Component} from "react"
import DrawerComponent from "./drawer.component";

type Props = {
    open: Boolean,
    handleDrawerClose: Function,
    children: Component
}
const DrawerModule = ({open, handleDrawerClose, children}: Props) => {
    return (
        <DrawerComponent open={open} handleDrawerClose={handleDrawerClose}>{children}</DrawerComponent>
    )
}

export default DrawerModule;
