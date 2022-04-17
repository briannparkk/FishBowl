import React, { useState } from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Signin';
import SignUp from './Signup'
import PrivateRoute from './PrivateRoute';
import HomePage from './Components/HomePage';
import StudentMeeting from './StudentMeeting';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/meeting" element={<StudentMeeting />} />
      </Routes>
    </div>
  );
}

export default App;
