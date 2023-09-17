import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import {Container} from 'react-bootstrap';

function App() {
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
}

export default App;
