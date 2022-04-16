import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Signin';
import SignUp from './Signup'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
