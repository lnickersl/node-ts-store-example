import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import {Container, Spinner} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {Context} from '.';
import {check} from './http/userAPI';
import {IUser} from './types/IUser';

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    check()
      .then((data: IUser) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner animation="grow" />;

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Container className="mt-3">
          <AppRouter />
        </Container>
      </BrowserRouter>
    </div>
  );
});

export default App;
