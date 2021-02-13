import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './QuizCard.css';
import {getQuizDetails} from './Services/quiz_service';
import {questionType,Quiz} from './Types/quiz_Types';
import QuestionCard from './Components/QuestionCard';
import Trophy from './trophy.svg';
import Fail from './fail.svg';



function App(props:any) {

let [quiz, setquiz] = useState<questionType[]>([]);
let [CurrentStep, setCurrentStep] = useState(0);
let [CurrentScore, setCurrentScore] = useState(0);
let [Result, setResult] = useState(-1);


 useEffect(()=>{

   async function getData() {
     const questions = await getQuizDetails(10,"easy",props.QuizType)
     
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
    if(Ans===quiz[(CurrentStep)].answer){
      setCurrentScore(++CurrentScore)
    }
    setResult(CurrentScore)
  }
}


if(!quiz.length){
  return(<h3 style={{textAlign:"center", marginTop:"250px", color:"white"}} >Loadingg</h3>)
}

  return (
  <div className="CardMain">
    <div className={Result==-1 ? "ShowMe" : "HideMe"} >
    <h3 className="ScoreBoard">Score {CurrentScore}</h3>
    <h5 style={{textAlign:"center"}} >{CurrentStep+1 + " of " + quiz.length}</h5>
   <QuestionCard 
    option={quiz[CurrentStep].option}
    question={quiz[CurrentStep].question}
    callBack={handleSubmit}
   />
</div>

<div className={Result!=-1 ? "ResultDiv" : "HideMe"} >
<img src={Result >= 5 ? Trophy : Fail} />
<h2>{Result >= 5 ? "Congrats!" : "Sorry Fail"}</h2>
<h1 style={{color:Result >= 5 ? "rgb(9, 146, 9)" : "red"}}>{((Result/quiz.length)*100).toFixed(1)}% Score</h1>
<p  >You attempt<span> {quiz.length } Questions</span> and from that <span>{Result} answer</span> is correct</p>
{/* color: rgb(9, 146, 9); */}

</div>

  </div>
  );
}

export default App;
