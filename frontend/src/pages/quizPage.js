// To-Do:
// accept currentUser as a JWT on server side.
// authenticate JWT
// countdown on server side
// read count in timer component

import React, {useEffect,useState, useRef} from "react";
import io from "socket.io-client";

//import LeftBar from '../components/leftBarComponent.js';
import RightBar from '../components/rightBarComponent.js';
import Question from '../components/questionComponent.js';
import Alert from 'react-bootstrap/Alert'

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

const ENDPOINT = "http://localhost:1337";
const socket = io(ENDPOINT);

const questionHandler = (msg, questionID, setResponse, setAnswers,setIsLoading) => {
  console.log( msg.message)
  setResponse(msg.message.question_text)
  setAnswers({A:msg.message.A,B:msg.message.B,C:msg.message.C,D:msg.message.D,E:msg.message.E,})
  setIsLoading(false)
}
///////// SOCKET END \\\\\\\\\\\\\

function Page() {
  ///////////////// TIMER START \\\\\\\\\\\\\\\\\

  const sinav_suresi = 90;
  //left time calculator
  let finish = new Date();
  finish.setSeconds(finish.getSeconds() + sinav_suresi);
  const [endTime] = useState(finish);

  const calculateTimeLeft = () => {
    const difference = +endTime - +new Date();
    if (difference>0)
      return difference;
    else {
      return 0
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const checkTimeFunction = () => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft);
    },1000);
  };

// To-Do !! add dependency array
  useEffect(() => {
    checkTimeFunction()
  });

  //chart
  const [chartData,setChartData] = useState({});

  useEffect( () => {
    if(timeLeft){
    const chart = () => {
      if(timeLeft){
        setChartData({
          datasets:
          [
            {
              data:[timeLeft, sinav_suresi*1000 - timeLeft],
              backgroundColor:['#61dafb'],
            },
          ]
        });
      }
    }
    chart(timeLeft);

  }}, [timeLeft] );

  /////////////////// TIMER END \\\\\\\\\\\\\\\\\\
  const currentUser = AuthService.getCurrentUser().jwt
  /////// SOCKET //////////
  const [isLoading,setIsLoading] = useState(false)
  const [response, setResponse] = useState()
  const [answers,setAnswers] = useState({})
  const [questionID,setQuestionID] = useState(1)
  const questionIDRef = useRef(questionID)
  
  useEffect(() => {
    console.log(currentUser);
    socket.emit('getQuestionNext', questionID, currentUser);
  },[questionID,currentUser]);

  useEffect(() => {
      // This effect executes on every render (no dependency array specified).
      // Any change to the "questionID" state will trigger a re-render
      // which will then cause this effect to capture the current "participants"
      // value in "questionIDRef.current".
      questionIDRef.current = questionID;
  });
  
  useEffect(()=>{
    const handler = (message) => {questionHandler(message, questionIDRef.current, setResponse, setAnswers,setIsLoading)};
    socket.on('question', handler);
  },[]);
  
  ///////// SOCKET END \\\\\\\\\\\\\

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
              <Question answers={answers} questionText={response} questionID={questionID} setQuestionID={setQuestionID} isLoading={isLoading} setIsLoading={setIsLoading}/>
            </div>
            <div className="col-sm-3">
              <RightBar chartData={chartData} timeLeft={timeLeft}/>
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
