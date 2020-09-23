import React from "react";
import Button from "react-bootstrap/Button"


import '../css/questionComponent.css';
import '../css/questionComponent-radio.css';

function Question({answers, questionText, questionID, setQuestionID,isLoading,setIsLoading}) {
  const listItems =
     <> 
     { answers ? 
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
      : ' '}
    </>
   
  ;

  const next = () =>{
    console.log('next')
    setIsLoading(true)
    setQuestionID(prev => prev + 1)
    //socket.emit('getQuestionNext', questionID);
  }

  const previous = () =>{
    console.log('previous')
    setIsLoading(true)
    setQuestionID(prev => prev - 1 ? prev - 1: prev)
  }
  

  return (
    
    <div className="col-sm-12 shadow">
      <span className="badge badge-secondary">Soru: {questionID} </span>
      <div className="question ">
        <p className="questionText">
        {questionText ? questionText : ''}
        </p>
        <form>
          {listItems}
        </form>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          <Button variant="secondary" size="md" onClick={previous} disabled={isLoading || (!(questionID-1))}>
            Önceki
          </Button>{' '}
          <Button variant="success" size="md" onClick={next} disabled={isLoading || ((questionID>9))}>
            Sonraki
          </Button>
        </div>
        <div className="col-6 col-md-4">
          <Button variant="outline-primary" size="md" onClick={next} disabled={isLoading}>
            Tamamla
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Question;
