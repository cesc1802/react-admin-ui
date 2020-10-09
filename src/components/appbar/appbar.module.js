import React from "react";
import AppBarComponent from "./appbar.component";

const AppBarModule = ({open, handleDrawerOpen}) => {
    return (
        <AppBarComponent open={open} handleDrawerOpen={handleDrawerOpen}/>
    )
}

export default AppBarModule
