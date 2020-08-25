import React from "react";
import LeftBar from '../components/leftBarComponent.js';
import RightBar from '../components/rightBarComponent.js';
import Question from '../components/questionComponent.js';

function Page() {
  return (
        <div className="col-12 ">
          <div className="col-3">
           
          </div>
          <div className="col-6" >
            <Question/>
          </div>
          <div className="col-3">
            <RightBar/>
          </div>
        </div>
  );
}
export default Page;
