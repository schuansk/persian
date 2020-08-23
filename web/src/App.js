import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './history';

import './styles.css';

import { AuthProvider } from './Context/AuthContext';

export default function App() {
    return (
        <AuthProvider>
            <Router history={history}>
                <Routes />
            </Router>
        </AuthProvider>
    )
}