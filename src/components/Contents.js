import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Link} from 'react-router-dom';
import './Contents.scss'
import icon from '../icon.png';
import mindmap_icon from '../images/web/mindmap-icon.png';
import quiz_icon from '../images/web/quiz-icon.png';
import horizentaline from '../images/web/horizentaline.png';
import styled, {css} from "styled-components";
import { AccordionButton } from 'react-bootstrap';

const AccordionColor = styled.div`
${(data) => {
  console.log('data',data)
  if(data.subject === '국어'){
    return css`background: red;`
  } else if(data.subject === '사회'){
    
    return css`background: red;`
  } else css`background: red;`
}}
`;
function Contents({data}) {
  console.log(data);
  const circleParser = (subs) => {
    let newNumber = "";
    console.log(newNumber);
    const number = subs.split('-');
    switch(number[1]){
      case '➊':
        newNumber = <span>{'1'}</span>
        break;
      case '➋':{ 
        newNumber = <span>{'2'}</span>
        break;}
      case '➌':{ 
        newNumber = <span>{'3'}</span>
        break;}
      case '➍':{ 
        newNumber = <span>{'4'}</span>
        break;}
      case '➎':{ 
        newNumber = <span>{'5'}</span>
        break;}
      case '➏':{ 
        newNumber = <span>{'6'}</span>
        break;}
      default : {
        break;}
    }
    return (<div>
      {number[0]}-
      {newNumber}
    </div>)
  }
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

  return(
    <div className="panel-group" id="accordion">
      {/* <AccordionColor className="" subject={data}></AccordionColor> */}
          <Accordion>
              {data.contents.map((item, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  {/* <AccordionColor className="number" subject={data.subject}>{item.unit}</AccordionColor> */}
                  <div className="number" style={circle(data.subject)}>{item.unit}</div>
                  <div className="title">{item.title}</div>
                </Accordion.Header>
                <Accordion.Body>
                  {item.subs.map((subs, index) => (
                    <ul key={subs.sub+index}>
                      {subs.sub != null ? circleParser(subs.sub) : ""}
                      <div key={subs.sub+index} className="img-container">
                        {subs.btns.map((btn, index) =>(
                          // <Link key={subs.sub+index} to={btn.btn_url.replace("https://edubook.mirae-n.com","")}>{btn.btn_name==="마인드맵"? <img src={mindmap_icon}/> : <img src={quiz_icon}/> }</Link>
                          <Link key={subs.sub+index} to={btn.btn_url.replace("https://edubook.mirae-n.com","")}>{btn.btn_name}</Link>
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