import React, { useState,useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../css/timerComponent.css'

const RightBar = () =>{

  const sinav_suresi = 90;
  //left time calculator
  let finish = new Date();
  finish.setSeconds(finish.getSeconds() + sinav_suresi);
  const [endTime] = useState(finish);

  const calculateTimeLeft = () => {
    const difference = +endTime - +new Date();
    if (difference>0)
      return difference;
    else {
      return 0
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const checkTimeFunction = () => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft);
    },1000);
  };

// To-Do !! add dependency array
  useEffect(() => {
    checkTimeFunction()
  });

  //chart
  const [chartData,setChartData] = useState({});

  useEffect( () => {
    if(timeLeft){
    const chart = () => {
      if(timeLeft){
        setChartData({
          datasets:
          [
            {
              data:[timeLeft, sinav_suresi*1000 - timeLeft],
              backgroundColor:['#61dafb'],
            },
          ]
        });
      }
    }
    chart(timeLeft);

  }}, [timeLeft] );

  return(
    <div className="col-3">
      <div className="timer">
        <div>
          <span>{timeLeft ? Math.floor((timeLeft / (3600000)) % 24) + ':' + Math.floor((timeLeft / 60000) % 60) + ':' + Math.floor((timeLeft / 1000) % 60) : 'Süreniz Dolmuştur'}</span>
        </div>
        <Doughnut data={chartData}  options={{height:'200 px',tooltips:{enabled:false},maintainAspectRatio: true, cutoutPercentage:80, animation:{animateRotate:true}}}/>

      </div>
    </div>
  );
}
// systemctl stop nginx
// /opt/letsencrypt/certbot-auto renew
// systemctl start nginx
export default RightBar;
