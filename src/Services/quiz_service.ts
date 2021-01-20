import {questionType, Quiz} from '../Types/quiz_Types'

const shuffleArray = (arr:any[])=>
  [...arr].sort(()=>Math.random()-0.5)

export const getQuizDetails = async(totalQuestion:number, level:string): Promise<Quiz[]> => {

  const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`)
  let {results} = await res.json() 


  const quiz = results.map((questionObj: Quiz)=>{
    return{
      question:questionObj.question,
      answer:questionObj.correct_answer,
      option:shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
    }
  })
  return quiz

  
}
