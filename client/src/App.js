import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth-hook';
import {AuthContext} from './context/auth-context';

import './index.css';
import 'materialize-css';



function App() {
  const {login, logout, token, userID} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value = {{login, logout, token, userID, isAuthenticated}}>
      <div className="app container">
        <Router>
          { routes }
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
