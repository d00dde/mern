import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';

import './index.css';
import 'materialize-css';



function App() {
  const routes = useRoutes(false);
  return (
    <div className="app container">
      <Router>
    	  { routes }
      </Router>
    </div>
  );
}

export default App;
