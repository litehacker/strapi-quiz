import React from 'react';

import Slider from './Slider';
import '../css/questionsSlider.css';

const questions = [
  {answered:false,No:91},
  {answered:false,No:92},
  {answered:true,No:93},
  {answered:true,No:94},
  {answered:true,No:94},
  {answered:true,No:94},
  {answered:true,No:94},
  {answered:true,No:94},
  {answered:true,No:94},
  {answered:true,No:94},
  {answered:true,No:94},
];


function LeftBar() {
  return (
        <div className="col-3">
          <div className="carousel">
            <Slider
              options={{
                pageDots: false,
                autoPlay: false,
                wrapAround: false,
                friction: 0.2,
                prevNextButtons: true,
                initialIndex: 5,

              }}
            >
              {questions.map((question, index) => (
                <div key={index}>
                  <input id="start" type="button" className={`button ${question.answered ? "button-blue" : "button-grey"}`} value={question.No}/>
                </div>
              ))}
            </Slider>
          </div>
        </div>
  );
}
// systemctl stop nginx
// /opt/letsencrypt/certbot-auto renew
// systemctl start nginx
export default LeftBar;
