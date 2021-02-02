import React, { useState } from "react";
import {questionPropsType} from '../Types/quiz_Types';
import '../QuizCard.css';



const QuestionCard : React.FC<questionPropsType> = ({question,option,callBack}) => {

    let [selectedAnswer, setSelectedAnswer] = useState("");
    const handleSelection = (ev:any) =>{
    // console.log(ev.target.value)
    setSelectedAnswer(ev.target.value)
    }
    const TagArr = ["A","B","C","D",]



  return(
      <div>
    <div dangerouslySetInnerHTML={{__html: question}} className="Questiondiv" ></div>    
   
    <form onSubmit={(e:React.FormEvent<EventTarget>)=>callBack(e,selectedAnswer)} >
        
        {
            option.map((val:string, index:number)=>{
                return(
                <div key={index} >
                     <input type="radio" value={val} 
                     id={"opt"+index}
                    name="option"
                    required
                    checked={selectedAnswer===val}
                    onChange={handleSelection} />
                <label
                htmlFor={"opt"+index}>
                    <span className="optionTag" > <span> {TagArr[index]} </span></span>
                     {val}
                </label>
                </div>
                 )
            })
        }
        <button type="submit" >SUBMIT </button>



    </form>


      </div>
  )
}

export default QuestionCard;