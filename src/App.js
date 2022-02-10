import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import GlobalProvider from './Context/GlobalProvider';
import Login from './Pages/Login';
import Todos from './Pages/Todos';

function App() {
  return (
    <GlobalProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route exact path="/todos" element={ <Todos /> } />
        </Routes>
      </HashRouter>
    </GlobalProvider>
  );
}

export default App;
