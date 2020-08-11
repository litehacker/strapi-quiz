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
              focus={4}
              options={{
                initialIndex: '.is-initial-select',
                pageDots: false,
                autoPlay: false,
                wrapAround: false,
                friction: 0.2,
              }}
            >
              {questions.map((question, index) => (
                <div key={index}>
                  <input id={index} type="button" className={`button ${question.answered ? "button-blue" : "button-grey"} ${index===5? "is-initial-select" : " "}`} value={question.No}/>
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
