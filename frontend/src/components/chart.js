
import React from 'react';
import ChartistGraph from 'react-chartist';
import questionComponent from "../pages/quizPage"

// Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

// Chartist.Pie('#chartPreferences', {
// labels: ['62%','32%','6%'],
// series: [62, 32, 6]
// });
const SinavBasarisi = ({submitDone}) => {

  

  let dataPreferences = {
    labels: [submitDone.yanlis +' Yanlış',submitDone.bos +' Boş',submitDone.dogru +' Doğru'],
    series: [submitDone.yanlis, submitDone.bos, submitDone.dogru],
    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)"
  };

  let optionsPreferences = {
    donut: false,
    donutWidth: 40,
    startAngle: 0,
    total: 13,
    showLabel: true,
    axisX: {
      showGrid: false,
      offset: 0
    },
    axisY: {
      offset: 0
    }
  };

  let chartType = 'Pie';
if(submitDone){
  return (

    <div className="card">
      <div className="header">
        <center><h4 className="title"><font color="#1792E8">Sınav Başarısı </font></h4></center>
        <p className="category"> </p>
      </div>
      <div className="content">
{
       <ChartistGraph data={dataPreferences} options={optionsPreferences} type={chartType} className={'ct-chart ct-perfect-fourth'} />

}
      </div>
      <div className="footer">
        <div className="legend">
          <div className="item">
            <i className="fa fa-circle text-info"></i> Doğru Sayısı {submitDone.dogru}
          </div>
          <div className="item">
            <i className="fa fa-circle text-danger"></i> Yanlış Sayısı {submitDone.yanlis}
          </div>
          <div className="item">
            <i className="fa fa-circle text-warning"></i> Boş {submitDone.bos}
          </div>
        </div>
        <hr />
        <div className="stats">
          <i className="fa fa-clock-o"></i> Sınavda 3. oldun.
          </div>
      </div>
    </div>

  );
}else{
  return(<div></div>)
}

};

export default SinavBasarisi;