import React from 'react';
import CustomCalendar from '/Users/tracyzhao/Documents/la_hacks/FishBowl/fishbowl/src/Components/Calendar.js';
import ClassList from '/Users/tracyzhao/Documents/la_hacks/FishBowl/fishbowl/src/Components/YourClasses.js';

export default function HomePage(props) {
    return (
      <div id='home'>
            <div id='homeHeader'>Hello, {props.username}</div>
            <div id='homeContainer'>
                <CustomCalendar/>
                <ClassList/>
            </div>
      </div>
    );
}