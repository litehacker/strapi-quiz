import React from "react";
//import LeftBar from '../components/leftBarComponent.js';
import RightBar from '../components/rightBarComponent.js';
import Question from '../components/questionComponent.js';

function Page() {
  return (
    <div className="container">
      <div className="row">
    
        <div className="col-sm-12 ">
          <div className="col-sm-3">
           
          </div>
          <div className="col-sm-6" >
            <Question/>
          </div>
          <div className="col-sm-3">
            <RightBar/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;
