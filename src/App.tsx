import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getQuizDetails} from './Services/quiz_service';
import {questionType,Quiz} from './Types/quiz_Types';
import QuestionCard from './Components/QuestionCard'

function App() {

let [quiz, setquiz] = useState<questionType[]>([]);

 useEffect(()=>{

   async function getData() {
     const questions = await getQuizDetails(15,"easy")
      setquiz(questions)
       console.log(questions)
   }

   getData()
 },[])




if(!quiz.length){
  return(<h3>Loadingg</h3>)
}

  return (
  <div className="App">
   <QuestionCard 
    option={quiz[0].option}
    question={quiz[0].question}
   />

  </div>
  );
}

export default App;
