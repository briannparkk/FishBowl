import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Signin';
import SignUp from './Signup'
import PrivateRoute from './PrivateRoute'
import React, { useState } from "react";
import { Dropdown, Option } from "./Dropdown";

export default function App() {
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };

  return (

  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>

    <div>
      <h1>Which service are you interested in?</h1>
      <Dropdown
        formLabel="Choose a service"
        buttonText="Send form"
        onChange={handleSelect}
        action="/"
      >
        <Option selected value="days" />
        <Option value="Monday" />
        <Option value="Tuesday" />
        <Option value="Wednesday" />
        <Option value="Thursday" />
        <Option value="Friday" />
        <Option value="Saturday" />
        <Option value="Sunday" />
      </Dropdown>
      <p>You selected {optionValue} </p>
    </div>
  );
}

export default App;
