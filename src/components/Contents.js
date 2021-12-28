
import Accordion from 'react-bootstrap/Accordion'
import {Link} from 'react-router-dom';
import './Contents.scss'
import { circleParser } from '../common/utils.js';
import styled, {css} from "styled-components";
import React,{ useContext } from 'react';
import ContextConsumer from '../contexts/AccordionContext';
import { propTypes } from 'react-bootstrap/esm/Image';

// 레드: #FF8A8A (개념, 추가문제, 해설강의)
// 퍼플: #8A8AFF (유형, 마인드맵, )
// 그린: #5BD59A (연산)
  const StyledButton = styled.div`
    display: flex;
    border-radius: 1em;
    margin-bottom: 0.5em;
    margin-left: 0.22em;
    padding: 0.5em 1em;
    align-items: center;
    justify-content: center;
    `;

// const [activeId, setActiveId] = useState("2");
function Contents({history, data}) {

  const button_order = (subject) => {
    if(subject ==='수학'){
        return{
          justifyContent:'flex-start'
        }
    }
  }

  const button = (btn_name) => {
    if (data.subject === '수학'){btn_name = btn_name[0]+btn_name[1]}
    switch(btn_name) {
      case '개념' :
      case '추가문제' :
      case '해설강의' :
        return {
          width: '7em',
          backgroundColor: '#FF8A8A',
          boxShadow: 'inset 0 -3px 6px 0px rgb(241, 81, 81)',
          cursor :'pointer',
        };
      case '유형' :
      case '마인드맵' :
        return {
          width: '7em',
          backgroundColor: '#8A8AFF',
          boxShadow: 'inset 0 -3px 6px 0px rgb(102, 102, 255)',
          cursor :'pointer',
        };
      case '연산':
        return {
          width: '7em',
          backgroundColor: '#5BD59A',
          boxShadow: 'inset 0 -3px 6px 0px rgb(0, 176, 91)', 
          cursor :'pointer',
        }     
    }
    
  }
  const math_button = () => {
  }
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

  React.useEffect(() => {
    var select_bar = document.querySelectorAll('.accordion-button');
    var body = document.querySelectorAll('.accordion-body');
    if(data.subject === '국어'){
      { 
        for ( var i = 0; i< select_bar.length; i++){
          select_bar[i].style.background = '#ff4d64';
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

  var link = (btn) =>{
    var loc = () => window.location.href = btn.btn_url
    btn.btn_name === "마인드맵" || btn.btn_name === "추가문제" ? history.push(btn.btn_url.replace("https://edubook.mirae-n.com","")) : loc()
  }

  // const context = useContext(AccordionContext);
  // console.log('컨슈머',context);
  return(
    <ContextConsumer>
      { value => (<div className="panel-group" id="accordion">
          <Accordion defaultActiveKey={value.acorindex}>
              {data.contents.map((item, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  <div className="number" style={circle(data.subject)}>{item.unit}</div>
                  <div className="title">{item.title}</div>
                  {/* <img src={quiz_icon} width="50"></img>> */}
                </Accordion.Header>
                <Accordion.Body>
                  {item.subs.map((subs, index) => (
                    <ul key={subs.sub+index}>
                      {subs.sub != null ? circleParser(subs.sub) : ""}
                      <div key={subs.sub+index} className="img-container" style={button_order(data.subject)}>
                        {subs.btns.map((btn, index) =>(
                          <StyledButton className="button" style={button(btn.btn_name)} onClick={()=>link(btn)}>
                            {
                              <a key={subs.sub+index}>{btn.btn_name}</a>
                              // (btn.btn_name === "마인드맵" || btn.btn_name === "추가문제") ? <Link key={subs.sub+index} to={btn.btn_url.replace("https://edubook.mirae-n.com","")}>{btn.btn_name}</Link> : <a key={subs.sub+index} href={btn.btn_url}>{btn.btn_name}</a>
                            }
                            </StyledButton>
                        ))}
                      </div>
                    </ul>
                  ))}
                </Accordion.Body>
              </Accordion.Item>))}    
          </Accordion>  
      </div>)}
    </ContextConsumer>
  );
}

export default Contents;