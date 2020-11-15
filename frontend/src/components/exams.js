import React , {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';  
import image from '../img/register.svg'
import { useHistory } from "react-router-dom";
/* App.js */

import Button from "react-bootstrap/Button"


import '../css/questionComponent.css';
import '../css/questionComponent-radio.css';
var tmp
function Exams() {
    const [exams,setExam]=useState({id:0,title:"examText",examtime:0,examprice:0,sinavtarihi:Date,soru_sayisi:0});
    const apiUrl = "https://sinavhukuk.com/api/exams";  
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');

  
  useEffect( () => {
    try {
      const fetchData = async () => {
        const response = await axios(
          apiUrl,
        );
      setExam({ exams: response.data });
        }
        fetchData();
     }catch (error) {
      setExam({ error });
    }
  },[]);
  tmp=1;
  console.log(exams)
  
  
  //setItems1({id:questionID,cvp:tmp})

  const next  = () => { 
    console.log('next')
    
   // setIsLoading(true)
   // setExamID(prev => prev + 1)
    
    //socket.emit('getQuestionNext', questionID);
    //socket.emit('userAnswer', answer);
  }
  const submit  = () => { 

    //setIsLoading(true)
    
  }



  const previous = () =>{
   
//    setIsLoading(true)
   // setExamID(prev => prev - 1 ? prev - 1: prev)
  }
  

  return (
    
    <div className="col-sm-12 shadow">
      <span className="badge badge-secondary">Exam: {tmp} </span>
      <div className="exam ">
        <p className="examText">
        {exams.title ? exams.title : ''}
        </p>
        <form>
          
        </form>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          <Button variant="secondary" size="md" onClick={previous} disabled={ (!(exams.id-1))}>
            Önceki Sınav
          </Button>{' '}
          <Button variant="success" size="md" onClick={next}  disabled={  ((exams.id>15))}>
            Sonraki Sınav
          </Button>{// next/previous/tamamla cevaplari alacak ve backende submit edecek.
          }
        </div>
        <div className="col-6 col-md-4">
          <Button variant="outline-primary" size="md" onClick={submit}  >
            Sınavı Al
          </Button>
        </div>
      </div>
    </div>
  );
}export default Exams;

