import {Context} from '..';
import {observer} from 'mobx-react-lite';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import React, {useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts';
import {EUserRole} from '../enums/EUserRole';

const NavBar = observer(() => {
  const {user} = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser(null);
    user.setIsAuth(false);
    localStorage.removeItem('token');
    navigate(LOGIN_ROUTE);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>
          Shop
        </NavLink>
        <Nav className="ml-auto" style={{color: 'white'}}>
          {user.isAuth && user?.user?.role === EUserRole.Admin ? (
            <Button
              variant={'outline-light'}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
          ) : (
            ''
          )}
          {user.isAuth ? (
            <Button
              className="ms-3"
              variant={'outline-light'}
              onClick={() => logOut()}
            >
              Выйти
            </Button>
          ) : (
            <Button
              variant={'outline-light'}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
