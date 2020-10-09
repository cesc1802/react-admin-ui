import React, { Component } from 'react';
import DrawerComponent from './drawer.component';

type Props = {
  open: boolean;
  handleDrawerClose: () => void;
  children: React.ReactNode;
};

const DrawerModule: React.FC<Props> = ({
  open,
  handleDrawerClose,
  children,
}) => {
  return (
    <DrawerComponent open={open} handleDrawerClose={handleDrawerClose}>
      {children}
    </DrawerComponent>
  );
};

export default DrawerModule;
