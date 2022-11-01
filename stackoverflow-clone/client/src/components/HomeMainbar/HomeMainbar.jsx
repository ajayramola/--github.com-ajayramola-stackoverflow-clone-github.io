import React from 'react'
import {Link , useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'

import QuestionList from './QuestionList'


const HomeMainbar =() =>{
  
const location=useLocation()
    const user=null;
    const navigate= useNavigate()


      var questionList=[{
          _id:1,
          upvotes:3,
          downVotes:2,
          noOfAnswer:2,
          questionTitle:"What is a Function?",
          questionBody:"It meant to be",
          questionTags:["java","node js","react js","mongodb"],
          userPosted:"mano",
          userId : 1,
          askedOn:"jan 1",
          answer :[{
            answersBody:"Answer",
            userAnswered:'Kumar',
            answerOn:"jan 2",
            userId:2,
          }]
      },{
          _id:2,
          upvotes:3,
          downVotes:2,
          noOfAnswers:0,
          questionTitle:"What is a Function?",
          questionBody:"It meant to be",
          questionTags:["javascript","R","python"],
          userPosted:"mano",
          askedOn:"jan 1",
          userId:1,
          answer: [{
              answerBody:"Answer",
              userAnswered:'Kumar',
              answerOn:"jan 2",
              userId:2,
          }]
        },{
          _id : 3,
          upVotes:3,
          downAnswers:2,
          noOfAnswers:0,
          questionTitle:"What is a Function?",
          questionBody:"It meant to be",
          questionTags:["javascript","R","python"],
          userPosted:"mano",
          askedOn:"jan 1",
          userId:1,
          answer: [{
              answerBody:"Answer",
              userAnswered:'Kumar',
              answerOn:"jan 2",
              userId:2,
          }]



      }]

    

  
  const checkAuth=()=>{
    if(user===null){
   
      alert("login or signup to ask a question")
      navigate('/Auth')

    } else {
      navigate('/AskQuestion')
    }
  }
  
     

  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
          {
            location.pathname === '/'?<h1>Top Questions</h1> :<h1>All Questions</h1>

          }
          <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
        </div>
        <div>
          {
              questionList ===null?
              <h1>Loading...</h1>:
              <>
                <p>{ questionList.length} questions</p>       
                 <QuestionList questionList={questionList}/>
                </>
              
          }


        </div>
    </div>
  )
}

export default HomeMainbar