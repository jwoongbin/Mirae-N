import './Quiz.css';
import exit from '../images/exit.png';
import choco from '../images/choco.png';
import logo from '../images/logo.png';
import { BrowserRouter, Link } from 'react-router-dom';
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
      <div className="header">
        <img className="logo" src={logo} width="15%" />
        <div className="center">
            <img className="choco" src={choco} width= "20%" />
            <h1 className="book">초등 사회 3-1</h1>
        </div>
        <Link to="/"><img className="exit" src={exit} /></Link>
      </div>
      <div className="contents">
        <ol className="quiz">
          {questions}
        </ol>
      </div>
      <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
    </div>

  );
}

export default Quiz;