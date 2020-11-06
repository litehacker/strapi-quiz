import React,{useState}from "react";
import Button from "react-bootstrap/Button"


import '../css/questionComponent.css';
import '../css/questionComponent-radio.css';
import { delay } from "lodash";

  function Question({submitDone,answers,questionText, questionID, setQuestionID,isLoading,setIsLoading,setUserAnswer,setUserSubmit}) {  
    const [answer, setAnswer] = useState({id:0,cvp:""});//<--
    const items1=[]
    var tmp2;
    const [Items, setItems] = useState([{id:0,cvp:""}]);
    const addMoreItem = () => {
      setItems(prevItems => [...prevItems, {
        id: questionID+1,
        value: tmp
      }]);
    } 
  const listItems =
     <> 
     { answers ? 
      <>
      <p>
      <input type="radio" id="A" name="radio-group" onClick={() => setAnswer({id:questionID,cvp:""})} onChange={(e) => setAnswer({id: questionID,cvp:"A"})} checked={answer.cvp === "A" }/>
      <label htmlFor="A">{answers.A}</label>
      </p>    
      <p>
       <input type="radio" id="B" name="radio-group" onClick={() => setAnswer({id:questionID,cvp:""})}  onChange={(e) => setAnswer({id: questionID,cvp:"B"})} checked={answer.cvp === "B"}/>
       <label htmlFor="B">{answers.B}</label>
      </p>
      <p>
      <input type="radio" id="C" name="radio-group" onClick={() => setAnswer({id:questionID,cvp:""})} onChange={(e) => setAnswer({id: questionID,cvp:"C"})} checked={answer.cvp === "C"} />
      <label htmlFor="C">{answers.C}</label>
      </p>
      <p>
      <input type="radio" id="D" name="radio-group" onClick={() => setAnswer({id:questionID,cvp:""})}  onChange={(e) => setAnswer({id: questionID,cvp:"D"})} checked={answer.cvp === "D"} />
      <label htmlFor="D">{answers.D}</label>
      </p>
      <p>
      <input type="radio" id="E" name="radio-group" onClick={() => setAnswer({id:questionID,cvp:""})}  onChange={(e) => setAnswer({id: questionID,cvp:"E"})} checked={answer.cvp === "E"}/>
      <label htmlFor="E">{answers.E}</label>
      </p>
      </>       
      : ' '}      
    </>    
  ;
  //setItems1({id:questionID,cvp:tmp})
  var tmp=answer.cvp
  tmp2=answer.cvp
  var x1=document.getElementById("A");
  var x2=document.getElementById("B");
  var x3=document.getElementById("C");
  var x4=document.getElementById("D");
  var x5=document.getElementById("E");
  setUserAnswer(Items)
  const zalimKod = (sayi) =>{
    var tmp3
    for (const [index, value] of Items.entries()) {
      items1.push(<li key={index} />)
        if(sayi===1) {
          tmp3=(value.id-2)
        }else if(sayi===2) {
          tmp3=value.id
        }else if(sayi===3){
          tmp3=value.id-2
        }
        if(x1.id===value.value && (tmp3)===questionID){
          x1.onClick=setAnswer({id:questionID,cvp:""})
          x1.onChange=setAnswer({id: questionID,cvp:"A"})
          x1.checked=setAnswer({id: questionID,cvp:"A"})
          tmp2=answer.cvp          
        }else if(x2.id===value.value && (tmp3)===questionID){
          x2.onClick=setAnswer({id:questionID,cvp:""})
          x2.onChange=setAnswer({id: questionID,cvp:"B"})
          x2.checked=setAnswer({id: questionID,cvp:"B"})
          tmp2=answer.cvp         
        }else if(x3.id===value.value && (tmp3)===questionID){
          x3.onClick=setAnswer({id:questionID,cvp:""})
          x3.onChange=setAnswer({id: questionID,cvp:"C"})
          x3.checked=setAnswer({id: questionID,cvp:"C"})
          tmp2=answer.cvp
        }else if(x4.id===value.value && (tmp3)===questionID){
          x4.onClick=setAnswer({id:questionID,cvp:""})
          x4.onChange=setAnswer({id: questionID,cvp:"D"})
          x4.checked=setAnswer({id: questionID,cvp:"D"}) 
          tmp2=answer.cvp
        }else if(x5.id===value.value && (tmp3)===questionID){
          x5.onClick=setAnswer({id:questionID,cvp:""})
          x5.onChange=setAnswer({id: questionID,cvp:"E"})
          x5.checked=setAnswer({id: questionID,cvp:"E"})
          tmp2=answer.cvp 
        }else if(x5.id!==value.value && x4.id!==value.value &&x3.id!==value.value &&x2.id!==value.value &&x1.id!==value.value&&(tmp3)===questionID && sayi!=3){ 
            if(tmp2==="A"){
                x1.onClick=setAnswer({id:questionID,cvp:""})
            }else if(tmp2==="B"){
                x2.onClick=setAnswer({id:questionID,cvp:""})
            }else if(tmp2==="C"){
                x3.onClick=setAnswer({id:questionID,cvp:""})
            }else if(tmp2==="D"){
                x4.onClick=setAnswer({id:questionID,cvp:""})
            }else if(tmp2==="E"){
                x5.onClick=setAnswer({id:questionID,cvp:""})
            } 
        }      
    }
  }
  const next  = () => { 
    addMoreItem()
    setIsLoading(true)
    setQuestionID(prev => prev + 1)
    answer.id=questionID+1;  
    answer.cvp="";
    zalimKod(1)
    setUserAnswer(Items)
  }
  const submit  = () => {    
    addMoreItem()
    setIsLoading(true)
    zalimKod(3)    
    const key = 'id';
    const ItemsUniqueByKey = [...new Map(Items.map(item =>
      [item[key], item])).values()];
    console.log(ItemsUniqueByKey)
    setUserAnswer(ItemsUniqueByKey);
    previous()
    setUserSubmit(true)
  }
  const previous = () =>{
    addMoreItem()
    setIsLoading(true)
    setQuestionID(prev => prev - 1 ? prev - 1: prev)
    answer.id=questionID-1
    zalimKod(2)
    setUserAnswer(Items)
  }
  if(!submitDone)
  {
    return (
      <div className="col-sm-12 shadow">
        <span className="badge badge-secondary">Soru: {questionID} </span>
        <div className="question ">
          <p className="questionText">
          {questionText ? questionText : ''}
          </p>
          <form>
            {listItems}
          </form>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
            <Button variant="secondary" size="md" onClick={previous} disabled={isLoading || (!(questionID-1))}>
              Önceki
            </Button>{' '}
            <Button variant="success" size="md" onClick={next}  disabled={isLoading || ((questionID>13))}>
              Sonraki
            </Button>{// next/previous/tamamla cevaplari alacak ve backende submit edecek.
            }
          </div>
          <div className="col-6 col-md-4">
            <Button variant="outline-primary" size="md" onClick={submit}  disabled={isLoading}>
              Tamamla
            </Button>
          </div>
        </div>
      </div>
    )
  }
  else
  {
    return(<div></div>)
  }
}export default Question;