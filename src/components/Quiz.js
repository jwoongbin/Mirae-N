import './Quiz.scss';
import pen from '../images/pen/pen.png';
import { useEffect, useState } from 'react';
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
        <div className="Quiz-contents">
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
              <div className="imgbox">
                <img className="img" src={pen} alt=""></img>
              </div>
              <div className="textbox">
                <div className="boxbox">0</div>
                {item.answer}
                </div>
              <div className="text">{item.answer}</div>     

          </div>

        </div>
      </li>)})
  
  return (
      <ol className="quiz">
        {questions}
      </ol>
  );
}

export default Quiz;