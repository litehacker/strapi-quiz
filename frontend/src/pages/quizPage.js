import React, {useEffect,useState} from "react";
import LeftBar from '../components/leftBarComponent.js';
import RightBar from '../components/rightBarComponent.js';
import Question from '../components/questionComponent.js';
import UserService from "../services/user.service";

function Page() {
  const [content, setContent] = useState([]);
  
  useEffect(() => {
    UserService.getUserBoard('/exams').then(
      response => {
        console.log(response.data[0])
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



  return (
    <div className="container">
      <div className="row">
    
        <div className="col-sm-12 ">
          <div className="col-sm-3">
          <LeftBar/>
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
export default Page;
