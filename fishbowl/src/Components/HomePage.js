import React from 'react';
import CustomCalendar from './Calendar.js';
import ClassList from './YourClasses.js';

export default function HomePage(props) {
    return (
      <div id='home'>
            <div id='homeHeader'>Hello, tracy</div>
            <div id='homeContainer'>
                <CustomCalendar/>
                <ClassList/>
            </div>
      </div>
    );
}