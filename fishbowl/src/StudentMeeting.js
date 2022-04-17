import React from 'react'
import QuestionBox from './QuestionBox'
import { useState, setState } from 'react';



export default function StudentMeeting() {
    const [questions, setQuestions] = useState([]);
    function askQuestion() {
        let question = document.getElementById("this-question").value;
        console.log(question);
        setQuestions([...questions, question]);
        document.getElementById("this-question").value = "";
    }
    return (
        <div className='student-meeting-screen'>
            <div className='student-vid-half'>
                <div style={{paddingTop: '250px', fontSize:'24px'}}>Live Video</div>
            </div>
            <div className='student-question-half'>
                <div style={{color: 'white', paddingTop: '20px', fontSize: '28px'}}>questions</div> <br/>
                <div>
                    {questions.map((value) => (
                        <QuestionBox text={value}/> 
                    ))}
                    <br />
                </div>
                <input id="this-question" className='student-ask-box' placeholder='ask the speaker a question'></input> <br/><br/><br/>
                <button onClick={() => askQuestion()} className='student-ask-button'>ask</button>
            </div>
        </div>
    )
}