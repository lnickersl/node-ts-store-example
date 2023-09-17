import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import {Context} from '..';

const AppRouter = () => {
  const {user} = useContext(Context);

  console.log(user);

  const routes = publicRoutes.map(({path, Component}) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  if (user.isAuth) {
    const auth = authRoutes.map(({path, Component}) => (
      <Route key={path} path={path} element={<Component />} />
    ));

    routes.push(...auth);
  }

  return <Routes>{routes}</Routes>;
};

export default AppRouter;
