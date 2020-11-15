import React , {useState,useEffect} from "react";
import axios from 'axios';  
import { useHistory } from 'react-router-dom';
import Button from "react-bootstrap/Button"
import '../css/questionComponent.css';
import '../css/questionComponent-radio.css';


function Exams() {
    const [exams,setExam]=useState();
    const apiUrl = "https://sinavhukuk.com/api/exams";  

    const history = useHistory();
    const routeChange = () =>{ 
      let path = `/deneme-sinavi`; 
      history.push(path);
    }
  useEffect( () => {
    try {
      const fetchData = async () => {
        const response = await axios(apiUrl);
        console.log(response.data)
        const listItems = response.data.map((exam) =>
          <div key={exam.id} className="card p-2">
            <span className="badge badge-secondary">Süre: {exam.exam_time} dakika</span>
            <div className="exam ">
              {exam.title ? exam.title : ''}: Soru sayısı:{exam.soru_sayisi ? exam.soru_sayisi : ''}
            </div>
            <div >
              <div className="col-6 col-md-4">
                <Button variant="outline-primary" size="md" onClick={routeChange}>
                  Sınavı Al
                </Button>
              </div>
            </div>
          </div>
        );
        setExam(listItems)
      }
      fetchData();
     }catch (error) {
       //console.log(error)
    }
  },[]);
/*
created_at: "2020-09-14T13:37:19.410Z"
exam_time: 9
id: 1
price: 40
questions: []
sinav_tarihi: "2021-02-09T22:30:00.000Z"
soru_sayisi: 3435
title: "Deneme Sınavı"
updated_at: "2020-10-30T12:00:55.103Z"
*/

  return (
    
    <div className="col-sm-12 shadow">
      {exams}
    </div>
  );
}export default Exams;

