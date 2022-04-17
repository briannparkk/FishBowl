import React, { useState } from "react";
import ReactDOM  from "react-dom";
import frog from './Frog.svg'

export default function QuestionBox(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="student-question-box">
            <p style={{color:'#7D8597', float:'left', paddingLeft:'20px'}}>{props.text}</p>
            <img alt="" onClick={incrementCount} src={frog} style={{cursor: 'pointer', float: 'right', paddingTop:'5px', paddingRight: '20px', width: '40px', height: '40px'}}/>
            <p class="upvote-count">{count}</p> 
        </div>
    )
}