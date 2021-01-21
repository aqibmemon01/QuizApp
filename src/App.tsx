import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getQuizDetails} from './Services/quiz_service';
import {questionType,Quiz} from './Types/quiz_Types';
import QuestionCard from './Components/QuestionCard'

function App() {

let [quiz, setquiz] = useState<questionType[]>([]);
let [CurrentStep, setCurrentStep] = useState(0);

 useEffect(()=>{

   async function getData() {
     const questions = await getQuizDetails(5,"easy")
      setquiz(questions)
       console.log(questions)
   }

   getData()
 },[])

const handleSubmit = (e:React.FormEvent<EventTarget>) =>{
   e.preventDefault();
   if(CurrentStep !== quiz.length-1)
   setCurrentStep(++CurrentStep)

}


if(!quiz.length){
  return(<h3>Loadingg</h3>)
}
console.log(quiz[0])
  return (
  <div className="App">
   <QuestionCard 
    option={quiz[CurrentStep].option}
    question={quiz[CurrentStep].question}
    callBack={handleSubmit}
   />

  </div>
  );
}

export default App;
