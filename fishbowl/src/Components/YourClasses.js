import React, { useState } from 'react';
import ClassItem from '/Users/tracyzhao/Documents/la_hacks/FishBowl/fishbowl/src/Components/Class.js';
import Add from '/Users/tracyzhao/Documents/la_hacks/FishBowl/fishbowl/src/Plus.svg';
import Remove from '/Users/tracyzhao/Documents/la_hacks/FishBowl/fishbowl/src/Remove.svg';
import AddPopup from '/Users/tracyzhao/Documents/la_hacks/FishBowl/fishbowl/src/Components/AddPopup.js';

export default function YourClasses(props) {
  const [addIsOpen, setAddIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
 
  const toggleAddPopup = () => {
    setAddIsOpen(!addIsOpen);
  }
  const toggleDeletePopup = () => {
    setAddIsOpen(!deleteIsOpen);
  }

    return (
      <div className='classContainer'>
          <div id='listHeader'>
            <div>
                <button onClick={toggleDeletePopup}>
                  <img alt="remove class" src={Remove}/> 
                </button>
            </div>
            <div>Your Classes</div>
            <div>
                <button onClick={toggleAddPopup}>
                  <img alt="add class" src={Add}/>
                </button>
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
        {addIsOpen && <AddPopup handleClose={toggleAddPopup}/>}
      </div>
    );
  }