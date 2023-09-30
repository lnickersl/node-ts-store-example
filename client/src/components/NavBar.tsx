import {AuthContext} from '..';
import {observer} from 'mobx-react-lite';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import React, {useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts';
import {EUserRole} from '../enums/EUserRole';

const NavBar = observer(() => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>
          Shop
        </NavLink>
        <Nav className="ml-auto" style={{color: 'white'}}>
          {auth?.user && auth?.user?.role === EUserRole.Admin ? (
            <Button
              variant={'outline-light'}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
          ) : (
            ''
          )}
          {auth?.user ? (
            <Button
              className="ms-3"
              variant={'outline-light'}
              onClick={() => auth.onLogout()}
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
