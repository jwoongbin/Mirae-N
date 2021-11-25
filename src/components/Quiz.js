import './Quiz.scss';
import exit from '../images/exit.png';
import choco from '../images/choco.png';
import logo from '../images/logo.png';
import penfront from '../images/pen/penfront.svg'
import penback from '../images/pen/penback.svg'
import pen from '../images/pen/pen.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import newdata from '../data.json'
import { fillParentheses } from '../common/utils';

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

  const questions = questionData.map((item, index) => {
    console.log(item.option_one)
    var optionable = item.option_one != null ? true : false;
    return(
      <li className="questions" key={index}> 
        <div className="num">{"0"+item.num+" "}</div>
        <div className="contents">
          <div className="question">
            {fillParentheses(item.question)} 
          </div>
          <div className={"options" + (optionable ? "" : " off")}>
            <div className="option">
              {item.option_one}
            </div>
            <div className="option">
              {item.option_two}
            </div>
            <div className="option">
              {item.option_three}
            </div>
          </div>
          <div className={'answer '+(click[index] ? '' : 'on')} onClick={() => onClick(index)}>
              <img className="img" src={pen}></img>
              <div className="text">{item.answer}</div>
              {/* {'정답'} */}
              {/* <div className="answer_front">
                {'11'}
              </div> */}
              {/* <div className={"answer_body"}>
                <div className="answer_text">
                  
                </div>
                <div className="answer_answer">

                </div>
              </div> */}
              {/* <div className="answer_back">
                {'0'}
              </div> */}
          
          </div>

        </div>
      </li>)})
  
  return (
  
    <div className="Quiz-wrap">
      <div className="contents">
        <ol className="quiz">
          {questions}
        </ol>
      </div>
    </div>

  );
}

export default Quiz;