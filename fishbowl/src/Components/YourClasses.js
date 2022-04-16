import React from 'react';
import ClassItem from '/Users/tracyzhao/Documents/la_hacks/FishBowl/fishbowl/src/Components/Class.js';
import Add from '/Users/tracyzhao/Documents/la_hacks/FishBowl/fishbowl/src/Plus.svg';
import Remove from '/Users/tracyzhao/Documents/la_hacks/FishBowl/fishbowl/src/Remove.svg';

export default function YourClasses(props) {
    return (
      <div className='classContainer'>
          <div id='listHeader'>
            <div>
                <img alt="remove class" src={Remove}/> 
            </div>
            <div>Your Classes</div>
            <div>
                <img alt="add class" src={Add}/>
            </div>
          </div>
          <div className='classList'>
              <ClassItem name={'cs 180'}/>
              <ClassItem name={'cs m152a'}/>
              <ClassItem name={'cs 111'}/>
              <ClassItem name={'class 4'}/>
              <ClassItem name={'office hours'}/>
              <ClassItem name={'meeting 1'}/>
              <ClassItem name={'meeting 2'}/>
              <ClassItem name={'meeting 3'}/>
          </div>

      </div>
    );
  }