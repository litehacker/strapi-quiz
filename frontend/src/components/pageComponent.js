import React from 'react';
import LeftBar from './leftBarComponent.js';
import RightBar from './rightBarComponent.js';
import Question from './questionComponent.js';
import Controlls from './questionButtonsComponent.js';

function Page() {
  return (
      <div className="col-12 ">
        <LeftBar/>
        <div className="col-6 shadow" >
          <Question/>
          <Controlls/>

        </div>
        <RightBar/>
      </div>
  );
}
// systemctl stop nginx
// /opt/letsencrypt/certbot-auto renew
// systemctl start nginx
export default Page;
