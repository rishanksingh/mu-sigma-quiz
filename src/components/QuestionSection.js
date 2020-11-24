import React, {useState} from "react"; 

const QuestionSection = ({ question, options, selected, id}) => { 
  const [answer, setAnswer] = useState(options); 
  return ( 
    <div className="container"> 
        <div className="h3 font-weight-light">{question}</div> 
        {options.map((text, index) => (
          <div className="p-1">
         <button 
              key={String(id) + index} 
              className={(answer.length === 1 && text === answer[0]) ? "btn btn-primary" : "btn btn-light"}
              onClick={()=>{ 
                    setAnswer([text]); 
                    selected(text); 
                  }}> {text} 
         </button> 
         </div>
        ))} 
    </div> 
  ) 
}; 
  
export default QuestionSection; 
