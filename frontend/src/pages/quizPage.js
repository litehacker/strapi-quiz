import React, {useEffect,useState} from "react";
import LeftBar from '../components/leftBarComponent.js';
import RightBar from '../components/rightBarComponent.js';
import Question from '../components/questionComponent.js';
import Alert from 'react-bootstrap/Alert'

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

function Page() {
  const [content, setContent] = useState([]);
  
  useEffect(() => {
    UserService.getUserBoard('/exams').then(
      response => {
        setContent(response.data.toString());
      },
      error => {
        setContent(error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          error.toString()
      }
    )
  }, []);

  const currentUser = AuthService.getCurrentUser()

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
              Öncelikle sisteme güriş yapınız. Dilerseniz {' '}
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
export default Page;
