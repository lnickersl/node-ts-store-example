import React, {ReactElement, useContext} from 'react';
import {AuthContext} from '..';
import {Navigate, useLocation} from 'react-router-dom';
import {LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts';
import {EUserRole} from '../enums/EUserRole';

export const ProtectedRoute = ({
  children,
  roles,
}: {
  children: ReactElement;
  roles?: EUserRole[];
}): ReactElement => {
  const auth = useContext(AuthContext);
  const location = useLocation();

  if (!auth?.user) {
    return <Navigate to={LOGIN_ROUTE} replace state={{from: location}} />;
  }

  if (Array.isArray(roles) && !roles.some(role => role === auth?.user?.role)) {
    return <Navigate to={SHOP_ROUTE} replace />;
  }

  return children;
};
