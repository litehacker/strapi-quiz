import React from 'react';
import '../App.css';

function QuestionButtons() {
  return (
        <div>
            <input type="button" className="button button-green" value="Onceki"/>
            <input type="button" className="button button-green" value="Sonraki"/>
            <input type="button" className="button button-blue disabled button-right" value="Tamamla"/>
        </div>
  );
}
export default QuestionButtons;
