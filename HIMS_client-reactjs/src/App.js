import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginPage/LoginForm';  
// import RegistrationForm from './components/RegistrationPage/RegistrationForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm/>}></Route>
          {/* <Route path="/" element={<RegistrationForm/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
