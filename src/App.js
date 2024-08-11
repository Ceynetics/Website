import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ComingSoon from './CommingSoon';
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<ComingSoon />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </div>
    );
}

export default App;