import React, { useState } from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Signin';
import SignUp from './Signup'
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
