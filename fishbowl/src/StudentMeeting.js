import React from 'react'
import QuestionBox from './QuestionBox'

export default function StudentMeeting() {
    function askQuestion() {
        let question = document.getElementsByClassName("student-ask-box").value;
        let answer = document.getElementsByClassName("answer-box").value;
    }
    return (
        <div className='student-meeting-screen'>
            <div className='student-vid-half'>
                <div style={{paddingTop: '250px', fontSize:'24px'}}>Live Video</div>
            </div>
            <div className='student-question-half'>
                <div style={{color: 'white', paddingTop: '20px', fontSize: '28px'}}>questions</div> <br/>
                <QuestionBox text="Put your question here"/> <br />
                <QuestionBox text=""/> <br />
                <QuestionBox text=""/> <br />
                <input className='student-ask-box' placeholder='ask the speaker a question'></input> <br/><br/><br/>
                <button onClick={askQuestion} className='student-ask-button'>ask</button>
            </div>
        </div>
    )
}
