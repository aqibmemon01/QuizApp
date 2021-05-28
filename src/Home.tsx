import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './QuizCard.css';
import {getQuizDetails} from './Services/quiz_service';
import {questionType,Quiz} from './Types/quiz_Types';
import QuestionCard from './Components/QuestionCard'

function App(props:any) {

let [quiz, setquiz] = useState<questionType[]>([]);
let [CurrentStep, setCurrentStep] = useState(0);
let [CurrentScore, setCurrentScore] = useState(0);




 useEffect(()=>{

   async function getData() {
     const questions = await getQuizDetails(15,"easy",props.QuizType)
     
      setquiz(questions)
       console.log(questions)
   }

   getData()
 },[])

const handleSubmit = (e:React.FormEvent<EventTarget>,Ans:string) =>{


  


  console.log(Ans)
   e.preventDefault();
   if(CurrentStep !== quiz.length-1){
   setCurrentStep(++CurrentStep)
   console.log("Currect Answer is " + quiz[(CurrentStep-1)].answer + " & Your Answer is " + Ans )
     if(Ans===quiz[(CurrentStep-1)].answer){
       setCurrentScore(++CurrentScore)
     }
  }
  else{
    alert("Completed")
  }
}


if(!quiz.length){
  return(<h3 style={{textAlign:"center", marginTop:"250px", color:"white"}} >Loadingg</h3>)
}
console.log(quiz[0])
  return (
  <div className="CardMain">
    <div>
    <h3 className="ScoreBoard">Score {CurrentScore}</h3>
    <h5 style={{textAlign:"center"}} >{CurrentStep+1 + " of " + quiz.length}</h5>
   <QuestionCard 
    option={quiz[CurrentStep].option}
    question={quiz[CurrentStep].question}
    callBack={handleSubmit}
   />
</div>
  </div>
  );
}

export default App;
