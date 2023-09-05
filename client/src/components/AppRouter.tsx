import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';

const AppRouter = () => {
  const isAuth = false;

  const routes = publicRoutes.map(({path, Component}) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  if (isAuth) {
    const auth = authRoutes.map(({path, Component}) => (
      <Route key={path} path={path} element={<Component />} />
    ));

    routes.push(...auth);
  }

  return <Routes>{routes}</Routes>;
};

export default AppRouter;
