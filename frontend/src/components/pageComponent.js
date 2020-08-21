import React from 'react';
import LeftBar from './leftBarComponent.js';
import RightBar from './rightBarComponent.js';
import Question from './questionComponent.js';
import Login from './login.component.js';
import Register from './signup.component.js';
import LandingPage from './landingPageComponent.js'
import Header from './headerComponent.js'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function Page() {
  return (
      <Router>
        <Header/>
        <div className="col-12 ">
          <div className="col-3">
            <Route path="/quiz" component={LeftBar}/>
          </div>
          <div className="col-6" >
            <Switch>
              <Route path="/" exact component={LandingPage}/>
              <Route path="/quiz" component={Question}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
            </Switch>
          </div>
          <div className="col-3">
            <Route path="/quiz" component={RightBar}/>
          </div>
        </div>
      </Router>
  );
}
// systemctl stop nginx
// /opt/letsencrypt/certbot-auto renew
// systemctl start nginx
export default Page;
