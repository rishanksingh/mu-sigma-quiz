import React from 'react'; 
  
const ResultSection = ({score, playAgain}) => ( 
  <div> 
    <div className="h3 font-weight-light"> Your score is {score} / 10 ! ! ! </div> 
    <button className="btn btn-info" onClick={playAgain} > Try Again </button> 
  </div> 
) 
  
export default ResultSection; 
