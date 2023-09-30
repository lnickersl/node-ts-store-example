import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import {Container, Spinner} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {AuthContext} from '.';

const App = observer(() => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!auth?.onCheck) {
      setLoading(false);
      return;
    }

    auth
      .onCheck()
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
