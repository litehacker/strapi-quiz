import React from 'react';
import LeftBar from './leftBarComponent.js';
import RightBar from './rightBarComponent.js';

function Page() {
  return (
      <div className="col-12 ">
        <LeftBar/>
        <div className="col-6 shadow" >
          <ul>
            <li>
              liste
            </li>
          </ul>

        </div>
        <RightBar/>
      </div>
  );
}
// systemctl stop nginx
// /opt/letsencrypt/certbot-auto renew
// systemctl start nginx
export default Page;
