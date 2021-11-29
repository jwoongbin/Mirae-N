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
    const marble = subs.split('-');
    return (<div>
      {marble[0]}-
      <span>{marble[1]}</span>
    </div>)
  }

  console.log(data);
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