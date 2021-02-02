import {questionType, Quiz} from '../Types/quiz_Types'

const shuffleArray = (arr:any[])=>
  [...arr].sort(()=>Math.random()-0.5)

export const getQuizDetails = async(totalQuestion:number, level:string, Category:number): Promise<questionType[]> => {

  const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple&category=${Category}`)
  let {results} = await res.json() 


  const quiz:questionType[] = results.map((questionObj: Quiz)=>{
    return{
      question:questionObj.question,
      answer:questionObj.correct_answer,
      option:shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
    }
  })
  return quiz

  
}
