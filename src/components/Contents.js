import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Link} from 'react-router-dom';
import './Contents.scss'
import mindmap_icon from '../images/web/mindmap-icon.png';
import quiz_icon from '../images/web/quiz-icon.png';
import { circleParser } from '../common/utils.js';

function Contents({data}) {
  //국어: 막대:#ff4d64 동그라미: #ffa39c
  //사회: 막대:#00b05b 동그라미: #5bd59a
  //수학: 막대:#5460b5 동그라미 #8589eb
  const circle = (subject) => {
    if(subject === '국어'){
      return {
        background: ' #ffa39c',
        borderColor: '#ff4d64',
      }
    }else if(subject ==='사회') {
      return {
        background: '#5bd59a',
        borderColor: '#00b05b ',
      }
    }else if(subject ==='수학'){
        return{
          background: '#8589eb',
          borderColor: '#5460b5',
        }
    }
  }

  const onSelect = (i) => {
    const select_bar = document.querySelectorAll('.accordion-button');

    if(data.subject === '국어'){
      select_bar[i].style.background = '#ff4d64';
      select_bar[i].classList.add('korean');
      console.log(select_bar[i].classList);
    }
  }

  React.useEffect(() => {
    var select_bar = document.querySelectorAll('.accordion-button');
    var body = document.querySelectorAll('.accordion-body');
    // var select_button = document.querySelectorAll('.accordion-button:after');

    let select_button;
    if(data.subject === '국어'){
      { 
        for ( var i = 0; i< select_bar.length; i++){
          select_bar[i].style.background = '#ff4d64';
          // select_bar[i].classList.add('korean');
          // console.log(select_bar[i].classList);
          // select_button = window.getComputedStyle(select_bar[i], ':after');
          // console.log(select_button);

          body[i].classList.add('korean');
        }
      }
    }else if(data.subject ==='사회') {
      {
        for ( var i = 0; i< select_bar.length; i++){
          select_bar[i].style.background = '#00b05b';
          select_bar[i].classList.add('society');
        }
      }
    }else if(data.subject ==='수학'){
        {
          for ( var i = 0; i< select_bar.length; i++){
            select_bar[i].style.background = '#5460b5';
            select_bar[i].classList.add('math');
          }
        }
    }
  }, []);

  return(
    <div className="panel-group" id="accordion">
          <Accordion>
              {data.contents.map((item, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header onClick={() => onSelect(index)}>
                  <div className="number" style={circle(data.subject)}>{item.unit}</div>
                  <div className="title">{item.title}</div>
                  {/* <img src={quiz_icon} width="50"></img>> */}
                </Accordion.Header>
                <Accordion.Body>
                  {item.subs.map((subs, index) => (
                    <ul key={subs.sub+index}>
                      {subs.sub != null ? circleParser(subs.sub) : ""}
                      <div key={subs.sub+index} className="img-container">
                        {subs.btns.map((btn, index) =>(
                          <Link key={subs.sub+index} to={btn.btn_url.replace("https://edubook.mirae-n.com","")}>{btn.btn_name==="마인드맵"? <img src={mindmap_icon}/> : <img src={quiz_icon}/> }</Link>
                          // <Link key={subs.sub+index} to={btn.btn_url.replace("https://edubook.mirae-n.com","")}>{btn.btn_name}</Link>
                        ))}
                      </div>
                    </ul>
                  ))}
                </Accordion.Body>
              </Accordion.Item>))}    
          </Accordion>  
    </div>
  );
}

export default Contents;