import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import {ProtectedRoute} from './ProtectedRoute';

const AppRouter = () => {
  const routes = publicRoutes.map(({path, Component}) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  const auth = authRoutes.map(({path, roles, Component}) => (
    <Route
      key={path}
      path={path}
      element={
        <ProtectedRoute roles={roles}>
          <Component />
        </ProtectedRoute>
      }
    />
  ));

  routes.push(...auth);

  return <Routes>{routes}</Routes>;
};

export default AppRouter;
