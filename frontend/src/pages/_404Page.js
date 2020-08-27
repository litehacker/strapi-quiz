import React from 'react';
import image404 from '../img/2452502.jpg';
import Alert from 'react-bootstrap/Alert'

function _404Component() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 ">
          <div className="col-sm-2">
            
          </div>
          <div className="col-sm-8" >
          {[
            'warning',
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              Aranan link bulunamamıştır. Dilerseniz {' '}
              <Alert.Link href="/">anaysayfaya dönebilirsiniz</Alert.Link>
              .
            </Alert>
          ))
          }
          <h3 className=""></h3>
          <img style={{ width: '100%', height: 'auto'}} src={image404} alt="404 page"/>
          <a style={{'fontSize': '5px'}} href="http://www.freepik.com">Designed by pikisuperstar / Freepik</a>  
          </div>
          <div className="col-sm-2">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default _404Component;
