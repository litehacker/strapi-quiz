import React, {useState, useEffect} from 'react';
import { HorizontalBar } from 'react-chartjs-2';

function TimeBar() {


  const [timeData,setTimeData] = useState({});



  useEffect(()=>{
    const chart = () => {
      setTimeData({
        datasets:
        [
          {
            data:[12],
            backgroundColor:['#61dafb'],
          },
        ]
      });
    }
    chart();
  },[])

  return (
        <div className="col-12">
            <HorizontalBar data={timeData} width={100} height={150} options={{ tooltips:{enabled:false}, maintainAspectRatio: false }}/>
        </div>
  );
}
export default TimeBar;
