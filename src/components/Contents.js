import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {BrowserRouter, Link} from 'react-router-dom';
import './Contents.css'
import icon from '../icon.png';

function Contents({data}) {
  return(
    <div className="panel-group" id="accordion">
          <Accordion>
              {data.map((item, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{item.unit} {item.title}</Accordion.Header>
                <Accordion.Body>
                  {item.subs.map((subs, index) => (
                    <ul key={subs.sub+index}>
                      {subs.sub}
                      <div className="img-container">
                        <Link to="/mindmap"><img width="30px" src={icon}/></Link>
                        <Link to="/quiz"><img width="30px" src={icon}/></Link>
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