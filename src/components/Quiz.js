import './Quiz.css';
import { useState } from 'react';

function Quiz({data}){
  const list = Array.from(new Array(data.length)).map(_=> true);
  const [click, setClick] = useState({list});

  function onClick(index) {
    const newArray = [...click];
    newArray[index] = false;
    console.log('newArray:', newArray)
    setClick(newArray);
    console.log(click);
    // setClick({...click, [list] : [true, false, false]});
  }
  
  const questions = data.map((item, index) => 
  <li className="questions" key={index}> 
    <div className="question">{data[0].subs[0].questiones[index].question}</div>
      <div className="answer" onClick={() => onClick(index)}>
        {click ? "<정답>": data[0].subs[0].questiones[index].answer}
      </div><br />
  </li>)

  return (
    <div className="Quiz-wrap">
      <div className="header"><h1>[개념 터치 추가 문제] -1</h1><br/></div>
      <div className="contents">
        <div><h1>정답을 클릭하면 답이 노출됩니다.</h1></div><br/>

        <ol className="quiz">
          {questions}
        </ol>
      </div>
      <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
    </div>

  );
}

export default Quiz;