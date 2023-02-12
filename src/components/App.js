import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './login/Login';
import { Register } from './register/Register'
import './../assets/css/App.css';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Login /> }></Route>
          <Route path='/register' element={ <Register /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
