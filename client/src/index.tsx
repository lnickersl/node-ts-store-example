import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductStore from './store/ProductStore';
import {AuthProvider, IAuthContext} from './components/AuthProvider';

const productStore = new ProductStore();

const context = {
  product: productStore,
};

export const AuthContext = createContext<IAuthContext | null>(null);

export const Context = createContext(context);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Context.Provider value={context}>
        <App />
      </Context.Provider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
