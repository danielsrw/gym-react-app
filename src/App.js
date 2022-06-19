import './App.css'
import React from 'react';
import { Box } from '@mui/material';
import { Navbar, Footer } from './components'
import { Home, ExerciseDetail } from './pages'
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
