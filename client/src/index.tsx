import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductStore from './store/ProductStore';
import {AuthProvider, IAuthContext} from './components/AuthProvider';
import {QueryClientProvider, QueryClient} from 'react-query';

const productStore = new ProductStore();

export const AuthContext = createContext<IAuthContext | null>(null);

export const ProductContext = createContext(productStore);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductContext.Provider value={productStore}>
        <QueryClientProvider client={new QueryClient()}>
          <App />
        </QueryClientProvider>
      </ProductContext.Provider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
