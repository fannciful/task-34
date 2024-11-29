import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Swapi from './pages/Swapi';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Висота сторінки — вся висота вікна
      }}
    >
      <Router>
        <Header />
        <Box sx={{ flex: 1 }}> {/* Основний контент */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/swapi" element={<Swapi />} />
          </Routes>
        </Box>
        <Footer /> {/* Футер внизу */}
      </Router>
    </Box>
  );
}

export default App;
