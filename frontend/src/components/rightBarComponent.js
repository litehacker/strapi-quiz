import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../css/timerComponent.css'

const RightBar = ({timeLeft, chartData}) =>{

  return(
      <div className="timer">
        <div>
          <span>{timeLeft ? Math.floor((timeLeft / (3600000)) % 24) + ':' + Math.floor((timeLeft / 60000) % 60) + ':' + Math.floor((timeLeft / 1000) % 60) : 'Süreniz Dolmuştur'}</span>
        </div>
        <Doughnut data={chartData}  options={{height:'200 px',tooltips:{enabled:false},maintainAspectRatio: true, cutoutPercentage:80, animation:{animateRotate:true}}}/>

      </div>
  );
}
export default RightBar;
