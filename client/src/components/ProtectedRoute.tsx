import React, {ReactElement, useContext} from 'react';
import {Context} from '..';
import {Navigate} from 'react-router-dom';
import {SHOP_ROUTE} from '../utils/consts';
import {EUserRole} from '../enums/EUserRole';

export const ProtectedRoute = ({
  children,
  roles,
}: {
  children: ReactElement;
  roles?: EUserRole[];
}): ReactElement => {
  const {user} = useContext(Context);

  if (
    !user.isAuth ||
    (Array.isArray(roles) && !roles.some(role => role === user.user?.role))
  ) {
    return <Navigate to={SHOP_ROUTE} replace />;
  }

  return children;
};
