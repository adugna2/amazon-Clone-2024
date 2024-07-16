import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from './APi/ProductContext'; // Ensure correct path
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);
