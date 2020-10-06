import React from "react";
import DrawerModule from "../drawer/drawer.module";
import AppBarModule from "../appbar/appbar.module";

const PublicLayout = ({children}) => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <AppBarModule open={open} handleDrawerOpen={handleDrawerOpen}/>
            <DrawerModule open={open} handleDrawerClose={handleDrawerClose}>{children}</DrawerModule>
        </>
    )
}

export default PublicLayout;
