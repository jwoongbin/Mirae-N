import './Quiz.css';
import { useEffect, useState } from 'react';

function Quiz({data}){
  const list = Array.from(new Array(data.length)).map(_=> true);
  const [click, setClick] = useState(list);

  function onClick(index) {
    let newArray = [...click];
    newArray[index] = !newArray[index]
    // newArray[index] = false;
    setClick(newArray);
  }
  
  useEffect(()=>{
    console.log(click,'상태 변경 감지')
  },[click])

  const questions = data.map((item, index) => 
  <li className="questions" key={index}> 
    <div className="question">{data[0].subs[0].questiones[index].question}</div>
      <div className="answer" onClick={() => onClick(index)}>
        {click[index] ? "<정답>": data[0].subs[0].questiones[index].answer}
      </div><br />
  </li>)

  return (
    <div className="Quiz-wrap">
      <div className="header"></div>
      <div className="contents">
        <ol className="quiz">
          {questions}
        </ol>
      </div>
      <div className="footer"></div>
    </div>

  );
}

export default Quiz;