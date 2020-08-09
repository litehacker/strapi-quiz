import React from 'react';

function LeftBar() {
  return (
        <div className="col-3">
          <div className="tooltip">
            <input id="start" type="button" className="button button-light-blue" value="<"/>
            <span className="tooltiptext">Önceki</span>
          </div>

          <input id="start" type="button" className="button button-blue" value="91"/>
          <input id="start" type="button" className="button button-blue" value="92"/>
          <input id="start" type="button" className="button button-blue" value="93"/>
          <input id="start" type="button" className="button button-blue" value="94"/>
          <input id="start" type="button" className="button button-blue" value="95"/>
          <input id="start" type="button" className="button button-grey" value="96"/>
          <input id="start" type="button" className="button button-grey" value="97"/>
          <input id="start" type="button" className="button button-grey" value="98"/>
          <div className="tooltip">
            <input id="start" type="button" className="button button-light-blue " value=">"/>
            <span className="tooltiptext">Sonraki</span>
          </div>
        </div>
  );
}
// systemctl stop nginx
// /opt/letsencrypt/certbot-auto renew
// systemctl start nginx
export default LeftBar;
