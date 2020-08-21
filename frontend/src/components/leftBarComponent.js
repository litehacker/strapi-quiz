import React from 'react';

import Slider from './Slider';
import '../css/questionsSlider.css';

const questions = [
  {answered:false,No:1},
  {answered:false,No:2},
  {answered:true,No:3},
  {answered:true,No:4},
  {answered:true,No:5},
  {answered:true,No:6},
  {answered:true,No:7},
  {answered:true,No:8},
  {answered:true,No:9},
  {answered:true,No:10},
  {answered:true,No:11},
];


function LeftBar() {
  return (

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
  );
}
// systemctl stop nginx
// /opt/letsencrypt/certbot-auto renew
// systemctl start nginx
export default LeftBar;
