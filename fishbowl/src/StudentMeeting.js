import React from 'react'
import QuestionBox from './QuestionBox'
import { useState, setState } from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import { configureAbly, useChannel } from "@ably-labs/react-hooks";

configureAbly({ key: "oyCG5A.V_cCpQ:m5A20ynS4h1Y3tgxRcTPF0x4Rhfgr172EW3WpSmajZ4"});

export default function StudentMeeting() {
    const [questions, setQuestions] = useState([]);

    const [channel] = useChannel("test", (question) => {
        setQuestions((prev) => [...prev, question.data.value]);
        console.log(question);
        console.log(questions);
    });

    function askQuestion() {
        let question = document.getElementById("this-question").value;
        console.log(question);
        console.log(typeof(question));
        channel.publish("test_message", { value: question });
        document.getElementById("this-question").value = "";
    }
    return (
        <div className='student-meeting-screen'>
            <div className='student-vid-half'>
                <div style={{marginLeft: '30px', marginTop: '100px'}}>
                    <YoutubeEmbed embedId='3h' />
                </div>
            </div>
            <div className='student-question-half'>
                <div style={{textAlign: 'center', color: 'white', paddingTop: '20px', fontSize: '28px'}}>questions</div> <br/>
                <div>
                    {questions.map((value, index) => (
                        <QuestionBox key = {index} text={value}/> 
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
