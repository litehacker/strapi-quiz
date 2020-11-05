
import React from 'react';
import ChartistGraph from 'react-chartist';
import questionComponent from "../pages/quizPage"

// Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

// Chartist.Pie('#chartPreferences', {
// labels: ['62%','32%','6%'],
// series: [62, 32, 6]
// });
const SinavBasarisi = ({submitDone}) => {

  let dataPreferences 
if(submitDone){
  let dataPreferences = {
    labels: [submitDone.yanlis +' Yanlış',submitDone.bos +' Boş',submitDone.dogru +' Doğru'],
    series: [submitDone.yanlis, submitDone.bos, submitDone.dogru]
  };
}
console.log(submitDone.dogru)
console.log(submitDone)
  let optionsPreferences = {
    donut: false,
    donutWidth: 40,
    startAngle: 0,
    total: 100,
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

  return (

    <div className="card">
      <div className="header">
        <h4 className="title">Sınav Başarısı</h4>
        <p className="category"> </p>
      </div>
      <div className="content">
{
      submitDone!=null &&  <ChartistGraph data={dataPreferences} options={optionsPreferences} type={chartType} className={'ct-chart ct-perfect-fourth'} />

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
};

export default SinavBasarisi;