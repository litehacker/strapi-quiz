import React, { useState,useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../css/timerComponent.css'

const RightBar = () =>{
  const sinav_suresi = 10;
  //left time calculator
  let finish = new Date();
  finish.setSeconds(finish.getSeconds() + sinav_suresi);
  const [endTime,setEndTime] = useState(finish);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +endTime - +new Date();
    let timeLeft = {};


    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      console.log(timeLeft);
    }, 1000);
  });

  //chart
  const [chartData,setChartData] = useState({});

  const chart = () => {
    setChartData({
      datasets:
      [
        {
          data:[timeLeft.seconds,0],
          backgroundColor:['#61dafb'],
        },
      ]
    });
  }

  useEffect(()=>{
    chart()
  },[]);

  return(
    <div className="col-3">
      <div className="timer">
        <div>
          <span>{timeLeft.seconds ? `${timeLeft.hours}` + ':' + `${timeLeft.minutes}` + ':' + `${timeLeft.seconds}` : 'Süreniz Dolmuştur'}</span>
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
