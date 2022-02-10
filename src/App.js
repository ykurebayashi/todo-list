import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import GlobalProvider from './Context/GlobalProvider';
import Login from './Pages/Login';
import Todos from './Pages/Todos';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route exact path="/todos" element={ <Todos /> } />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
