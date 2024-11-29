import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material'; // Налаштовує базовий стиль Material-UI
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline /> {/* Базові стилі для всього додатка */}
    <App />
  </React.StrictMode>
);
