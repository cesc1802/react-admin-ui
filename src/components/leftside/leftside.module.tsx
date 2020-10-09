import React from 'react';
import LeftSideComponent from './leftside.component';
import { renderRoute } from '../../common/route/menu.route';

const LeftSideModule = () => {
  const menuRoutes = renderRoute();
  return (
    <>
      {menuRoutes.map((route: any, index: number) => {
        return (
          <LeftSideComponent
            key={index}
            text={route.meta.text}
            path={route.path}
            routes={route.routes || []}
          />
        );
      })}
    </>
  );
};

export default LeftSideModule;
