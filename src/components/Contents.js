import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Link} from 'react-router-dom';
import './Contents.scss'
import icon from '../icon.png';
import mindmap_icon from '../images/web/mindmap-icon.png';
import quiz_icon from '../images/web/quiz-icon.png';
import horizentaline from '../images/web/horizentaline.png';
function Contents({data}) {

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

  return(

    <div className="panel-group" id="accordion">
          <Accordion>
              {data.map((item, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  <div className="number">{item.unit}</div>
                  <div className="title">{item.title}</div>
                </Accordion.Header>
                <Accordion.Body>
                  {item.subs.map((subs, index) => (
                    <ul key={subs.sub+index}>
                      {circleParser(subs.sub)}
                      <div key={subs.sub+index} className="img-container">
                        {subs.btns.map((btn, index) =>(
                          <Link key={subs.sub+index} to={btn.btn_url.replace("https://edubook.mirae-n.com","")}>{btn.btn_name==="마인드맵"? <img src={mindmap_icon}/> : <img src={quiz_icon}/> }</Link>
                        ))}
                      </div><hr/>
                      {/* <img className="line" src={horizentaline}/> */}
                    </ul>
                  ))}
                </Accordion.Body>
              </Accordion.Item>))}    
          </Accordion>  
    </div>
  );
}

export default Contents;