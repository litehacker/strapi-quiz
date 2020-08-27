import React from 'react';
import image404 from '../img/2452502.jpg';

function _404Component() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <div className="col-2">
            
          </div>
          <div className="col-8" >
          <img style={{ width: '100%', height: 'auto'}} src={image404} alt="404 page"/>
          <a style={{'fontSize': '5px'}} href="http://www.freepik.com">Designed by pikisuperstar / Freepik</a>  
          </div>
          <div className="col-2">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default _404Component;
