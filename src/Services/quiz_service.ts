import {questionType, Quiz} from '../Types/quiz_Types'


export const getQuizDetails = async(totalQuestion:number, level:string): Promise<Quiz[]> => {

  const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`)
  let {results} = await res.json() 
    
  const quiz = results.map((questionObj: Quiz)=>{
    return{
      question:questionObj.question,
      answer:questionObj.correct_answer,
      option:questionObj.incorrect_answers.concat(questionObj.correct_answer)
    }
  })
  return quiz

  
}
