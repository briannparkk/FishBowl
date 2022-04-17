import React from 'react'
import QuestionBox from './QuestionBox'
import { useState, setState } from 'react';
import YoutubeEmbed from './YoutubeEmbed';

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
                <div style={{marginLeft: '30px', marginTop: '100px'}}>
                    <YoutubeEmbed embedId='r2fdsa' />
                </div>
            </div>
            <div className='student-question-half'>
                <div style={{textAlign: 'center', color: 'white', paddingTop: '20px', fontSize: '28px'}}>questions</div> <br/>
                <div>
                    {questions.map((value) => (
                        <QuestionBox text={value}/> 
                    ))}
                    <br />
                </div>
                <div className="textbox-wrapper">
                    <textarea id="this-question" className='student-ask-box' placeholder='ask the speaker a question'></textarea> 
                </div>
                <br/><br/><br/>
                <button onClick={() => askQuestion()} className='student-ask-button'>ask</button>
            </div>
        </div>
    );
}
