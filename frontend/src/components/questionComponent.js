import React from 'react';
import Controlls from './questionButtonsComponent.js';

import '../css/questionComponent.css';
import '../css/questionComponent-radio.css';

function Question() {
  return (
    
    <div className="col-sm-12 shadow">
      <span>Q:96 </span>
      <div className="question ">
        <p className="questionText">
        Bu bir deneme sorusu mudur?
        </p>
        <p>
          <input type="radio" id="test1" name="radio-group"/>
          <label htmlFor="test1">Evet</label>
        </p>
        <p>
          <input type="radio" id="test2" name="radio-group"/>
          <label htmlFor="test2">Hayir</label>
        </p>
        <p>
          <input type="radio" id="test3" name="radio-group"/>
          <label htmlFor="test3">Hepsi</label>
        </p>
      </div>
      <Controlls/>
    </div>
  );
}
export default Question;
