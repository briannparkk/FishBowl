import React from 'react';
import StartButton from '/Users/tracyzhao/Documents/la_hacks/FishBowl/fishbowl/src/play1.svg';

export default function Class(props) {
    return (
      <div id='classItem'>
          {props.name}
          <img alt="start call" src={StartButton}/>
      </div>
    );
  }