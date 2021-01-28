import React, { useState } from "react";
import {questionPropsType} from '../Types/quiz_Types';
// import '../App.css';


const QuestionCard : React.FC<questionPropsType> = ({question,option,callBack}) => {

    let [selectedAnswer, setSelectedAnswer] = useState("");
    const handleSelection = (ev:any) =>{
    // console.log(ev.target.value)
    setSelectedAnswer(ev.target.value)
    }



  return(
      <div>
    <h1>Quiz App</h1>

    <div dangerouslySetInnerHTML={{__html: question}}>{}</div>    
  
    <form onSubmit={(e:React.FormEvent<EventTarget>)=>callBack(e,selectedAnswer)} >
        
        {
            option.map((val:string, index:number)=>{
                return(
                <div key={index} >
                <label >
                    <input type="radio" value={val} 
                    name="option"
                    required
                    checked={selectedAnswer===val}
                    onChange={handleSelection} />
                    {val}
                </label>
                </div>
                 )
            })
        }
        <input type="submit" />



    </form>


      </div>
  )
}

export default QuestionCard;