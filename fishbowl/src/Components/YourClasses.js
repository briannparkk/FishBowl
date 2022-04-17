import React, { useState } from 'react';
import ClassItem from './Class.js';
import Add from '../Plus.svg';
import Remove from '../Remove.svg';
import AddPopup from './AddPopup.js';
import DeletePopup from './DeletePopup.js';

export default function YourClasses(props) {
  const [addIsOpen, setAddIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
 
  const toggleAddPopup = () => {
    setAddIsOpen(!addIsOpen);
  }
  const toggleDeletePopup = () => {
    setDeleteIsOpen(!deleteIsOpen);
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
        {deleteIsOpen && <DeletePopup handleClose={toggleDeletePopup}/>}
      </div>
    );
  }