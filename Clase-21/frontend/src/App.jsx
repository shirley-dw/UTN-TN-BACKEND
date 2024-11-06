import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginScreen, RegisterScreen, ForgotPasswordScreen, RecoveryPasswordScreen } from '../../frontend/src/Screens/index.js';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/forgot-password" element={<ForgotPasswordScreen />} /> 
            <Route path="/forgot-password/:reset_token" element={<RecoveryPasswordScreen />} />
        </Routes>
    );
}

export default App;
