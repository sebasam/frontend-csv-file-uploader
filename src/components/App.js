import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './login/Login';
import './../assets/css/App.css';

export const App = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
