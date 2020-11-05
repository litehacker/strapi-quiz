import React, {useEffect,useState, useRef} from "react";
import io from "socket.io-client";


import RightBar from '../components/rightBarComponent.js';
import Exams from '../components/exams.js';
import Alert from 'react-bootstrap/Alert'

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

const ENDPOINT = "http://localhost:1337";
const socket = io(ENDPOINT);


function Exam() {
  const currentUser = AuthService.getCurrentUser().jwt;
  
  /////// SOCKET //////////
  const [isLoading,setIsLoading] = useState(false)
  const [response, setResponse] = useState()
  const [examID,setExamID] = useState(1)
  const [content, setContent] = useState(["Mevcut Sınavlar"]);













if (currentUser){
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 ">
          <div className="col-sm-3">
          {//<LeftBar/>
          }
          <h3>{content}</h3>
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
else{
  return(
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
            Öncelikle sisteme giriş yapınız. Dilerseniz {' '}
            <Alert.Link href="/login">Giriş Sayfasına </Alert.Link>
            geçin.
          </Alert>
        ))
        }  
        </div>   
        <div className="col-sm-2">
          
        </div> 
      </div>
    </div>
  </div>    
  )
}
}

export default Exam;







