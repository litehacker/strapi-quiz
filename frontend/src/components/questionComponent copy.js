import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import Controlls from './questionButtonsComponent.js';
import '../css/questionComponent.css';
import '../css/questionComponent-radio.css';

function Question() {
  const ENDPOINT = "https://sinavhukuk.com/api";
  const [response, setResponse] = useState();
  const [answers,setAnswers] = useState({})
  const [userAnswer,setUserAnswer] = useState({})
 
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on('message', (data)=> {setResponse(data)});
    socket.on('endEvent', ()=>{console.log('End event done.')})
    socket.on('question', (msg, cb) => {
      console.log( msg.message)
      setResponse(msg.message.question_text)
      setAnswers({A:msg.message.A,B:msg.message.B,C:msg.message.C,D:msg.message.D,E:msg.message.E,})
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);

  const listItems = 
    <>
      <p>
        <input type="radio" id="A" name="radio-group"/>
        <label htmlFor="A">{answers.A}</label>
      </p>
      <p>
        <input type="radio" id="B" name="radio-group"/>
        <label htmlFor="B">{answers.B}</label>
      </p>
      <p>
        <input type="radio" id="C" name="radio-group"/>
        <label htmlFor="C">{answers.C}</label>
      </p>
      <p>
        <input type="radio" id="D" name="radio-group"/>
        <label htmlFor="D">{answers.D}</label>
      </p>
      <p>
        <input type="radio" id="E" name="radio-group"/>
        <label htmlFor="E">{answers.E}</label>
      </p>

    </>
  ;

  return (
    
    <div className="col-sm-12 shadow">
      <span>Q:96 </span>
      <div className="question ">
        <p className="questionText">
        {response ? response : ''}
        </p>
        <form>
          {listItems}
        </form>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          <input type="button" className="btn btn-outline-success mr-2" value="Önceki"/>
          <input type="button" className="btn btn-success" value="Sonraki" />
        </div>
        <div className="col-6 col-md-4">
          <input type="button" className="btn btn-primary disabled" value="Tamamla"/>
        </div>
      </div>
    </div>
  );
}
export default Question;
