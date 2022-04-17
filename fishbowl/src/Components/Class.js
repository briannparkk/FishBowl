import React from 'react';
import StartButton from '../play1.svg';
import { useNavigate } from "react-router-dom";

export default function Class(props) {
  let navigate = useNavigate();
  function goToCall(){
    navigate("/meeting");
  }

    return (
      <div id='classItem'>
          {props.name}
          <img alt="start call" src={StartButton} onClick={goToCall}/>
      </div>
    );
  }