import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './components/store/CartContext';

// Create a root
const root = createRoot(document.getElementById('root'));

// Render the App component wrapped with CartProvider
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
