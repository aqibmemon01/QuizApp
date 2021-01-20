import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getQuizDetails} from './Services/quiz_service';
import {Quiz} from './Types/quiz_Types'

function App() {

let [quiz, setquiz] = useState<Quiz[]>([]);

 useEffect(()=>{

   async function getData() {
     const questions = await getQuizDetails(15,"easy")
      setquiz(questions)
       console.log(questions)
   }

   getData()
 },[])





  return (
  <div className="App">

  </div>
  );
}

export default App;
