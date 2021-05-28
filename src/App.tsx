import React, { useState } from "react";
import QuizApp from "./Home";
import './App.css';
import './QuizCard.css';


function App(){

let [SelectedQuiz, setSelectedQuiz] = useState(0);

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg:any) {
      var options = {
        body: 'Here is a notification body!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {action: 'explore', title: 'Explore this new world',
            icon: 'Back.jpg'},
          {action: 'close', title: 'Close notification',
            icon: 'logo.svg'},
        ]
      };
      reg.showNotification('Hello world!', options);
    });
  }
}
displayNotification()



if(SelectedQuiz != 0){
  return(
      <div className="Main" >
 
<QuizApp QuizType={SelectedQuiz} />
</div>
 )
}

else{
  return(
    <div className="Main" >
      
      <div className={SelectedQuiz != 0 ? "HideMe" : "ShowMe"}>
  <div className="QuizHead" >Quiz App</div>

  <div className="SelectQuizBtn" >
    Select Quiz
  </div>

  <div className="SelectBox" >

  <div onClick={()=>setSelectedQuiz(9)} >
    General Knowledge
  </div>
  <div onClick={()=>setSelectedQuiz(21)} >
    Sports
  </div>
  <div onClick={()=>setSelectedQuiz(18)} >
   Computer Sceince 
  </div>
  <div onClick={()=>setSelectedQuiz(19)}>
    Mathematics Sceince
  </div>
  <div onClick={()=>setSelectedQuiz(23)}>
   History 
  </div>
  <div onClick={()=>setSelectedQuiz(27)}>
    Animals
  </div>
  

  </div>
  </div>

    </div>
)
}

}

export default App;