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
import SinavBasarisi from '../components/chart.js';
import Alert from 'react-bootstrap/Alert'

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

const ENDPOINT = "https://sinavhukuk.com/api";
const socket = io(ENDPOINT);

const questionHandler = (msg, questionID, setResponse, setAnswers,setIsLoading) => {
  setResponse(msg.message.question_text)
  setAnswers({A:msg.message.A,B:msg.message.B,C:msg.message.C,D:msg.message.D,E:msg.message.E,})
  setIsLoading(false)
}
const resultHandler = (msg, setSonuc, setSubmitDone) => {
  console.log(msg.message)
  setSonuc(msg.message)
  setSubmitDone(msg.message)
  socket.disconnect()
}


///////// SOCKET END \\\\\\\\\\\\\

function Page() {
  const currentUser = AuthService.getCurrentUser().jwt;
  const [submitDone, setSubmitDone] = useState()

  /////// SOCKET //////////
  const [isLoading,setIsLoading] = useState(false)
  const [response, setResponse] = useState()
  const [answers,setAnswers] = useState({})
  const [questionID,setQuestionID] = useState(1)
  const questionIDRef = useRef(questionID)
  const [userResult,setUserResult] = useState(1)
  const userResultRef = useRef(userResult)
  const [userAnswer,setUserAnswer] = useState({id:0,cvp:""})
  const [userSubmit,setUserSubmit] = useState(false)
  const [sonuc ,setSonuc] = useState({})

  useEffect(() => {
    console.log("connected?",socket.connected);
    socket.emit('getQuestionNext', questionID, currentUser);
  },[questionID,currentUser]);  
  
  useEffect(() => {
    if(userSubmit){
    //console.log(userAnswer);
    
    socket.emit('userAnswer',userAnswer,currentUser)
    }
  },[userAnswer],[userSubmit]);

  useEffect(() => {
    if(userSubmit){
    //console.log("Buradayım");
    socket.emit('getExamResult',userResult, currentUser);
    }
    //console.log("burdayımmm")
  },[userResult,currentUser],[userSubmit]);  


  useEffect(() => {
      // This effect executes on every render (no dependency array specified).
      // Any change to the "questionID" state will trigger a re-render
      // which will then cause this effect to capture the current "participants"
      // value in "questionIDRef.current".
      questionIDRef.current = questionID;
  });
  useEffect(() => {
    userResultRef.current = userResult;
  });
  
  useEffect(() => {
    const handler = (message) => {questionHandler(message, questionIDRef.current, setResponse, setAnswers,setIsLoading)};
    socket.on('question', handler);
  });
  useEffect(() => {
    const handler2 = (message) =>{resultHandler(message,setSonuc,setSubmitDone)}
    socket.on('result', handler2);
  },[userAnswer]);
 
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
              {
           
              }
            </div>
            <div className="col-sm-6" >
              {
                     <Question  submitDone={submitDone} answers={answers} questionText={response} questionID={questionID} setQuestionID={setQuestionID} isLoading={isLoading} setIsLoading={setIsLoading} setUserAnswer={setUserAnswer} setUserSubmit={setUserSubmit}/>
              }
              {
                   submitDone!=null && <SinavBasarisi submitDone={submitDone}/>
              }
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
export default Page;
