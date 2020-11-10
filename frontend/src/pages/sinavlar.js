import React from "react";
import Exams from '../components/exams.js';



function Exam() {
  
  /////// SOCKET //////////

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 ">
          <div className="col-sm-3">
          {//<LeftBar/>
          }
          <h3>Mevcut Sınavlar</h3>
          </div>
          <div className="col-sm-6" >
            <Exams   />
          </div>
          <div className="col-sm-3">
            {//<RightBar/>
            }    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam;







