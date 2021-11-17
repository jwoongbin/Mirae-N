import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {BrowserRouter, Link} from 'react-router-dom';
import './Contents.css'
import icon from '../icon.png';

// unit, sub 
function Contents({data}) {
  console.log(data);
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
                        {subs.btns.map((btn, index) =>(
                          <Link to={btn.btn_url.replace("https://edubook.mirae-n.com","")}><img width="30px" src={icon}/>{btn.btn_name}</Link>
                        ))}
{/*                  
                        <Link to="/mindmap"><img width="30px" src={icon}/>{}</Link>
                        <Link to="/quiz"><img width="30px" src={icon}/></Link> */}
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