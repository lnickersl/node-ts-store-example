import React, {useContext, useState} from 'react';
import {Button, Card, Col, Form, Row} from 'react-bootstrap';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../utils/consts';
import {login, registration} from '../http/userAPI';
import {observer} from 'mobx-react-lite';
import {Context} from '..';

const Auth = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const {user} = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const signIn = async () => {
    setErrorMsg('');

    const auth = isLogin ? login : registration;

    const userData = await auth(email, password).catch(err => {
      console.error(err);

      const error = err?.response?.data?.message;

      if (error) {
        setErrorMsg(error.toString());
      }
    });

    if (!userData) return;

    user.setUser(userData);
    user.setIsAuth(true);
    navigate(SHOP_ROUTE);
  };

  return (
    <Row className="d-flex justify-content-center m-5">
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column mt-4">
          <p style={{color: 'red '}}>{errorMsg}</p>
          <Form.Control
            placeholder="Введите email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-4"
            placeholder="Введите пароль..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться.</NavLink>
              </div>
            ) : (
              <div>
                Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти.</NavLink>
              </div>
            )}
            <Button onClick={() => signIn()} variant={'outline-success'}>
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Col>
        </Form>
      </Card>
    </Row>
  );
});

export default Auth;
