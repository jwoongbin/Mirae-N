import './Quiz.scss';
import exit from '../images/exit.png';
import choco from '../images/choco.png';
import logo from '../images/logo.png';
import penfront from '../images/pen/penfront.png'
import penback from '../images/pen/penback.png'
import { BrowserRouter, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import newdata from '../data.json'

function Quiz({data, conindex, subindex}){
  const questionData = data.contents[conindex].subs[subindex].questions
  const list = Array.from(new Array(questionData.length)).map(_=> true);
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

  const questions = questionData.map((item, index) => 
  <li className="questions" key={index}> 
    <div className="contents">
      <div className="question">
        {item.question} 
      </div>
      <div className={'answer '+(click[index] ? '' : 'on')} onClick={() => onClick(index)}>
       
          <img className={"answer_img"} src ={penfront} alt=''/>
          <div className={"answer_body"}>
            <div className="answer_text">
              {item.answer}
            </div>
            <div className="answer_a">
              {'정답'}
            </div>
          </div>
          <img className={"answer_img"} src ={penback} alt=''/>
      
      </div>

    </div>
  </li>)
  
  const chapter = (data.subject + ' ' + data.grade+'-'+data.semester);  
  console.log('newdata:', newdata);
  return (
  
    <div className="Quiz-wrap">
      <div className="header">
        <img className="logo" src={logo} width="15%" alt=''/>
        <div className="center">
            <img className="choco" src={choco} width= "20%" />
            <h1 className="book">{chapter}</h1>
        </div>
        <Link to="/"><img className="exit" src={exit} alt='' /></Link>
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