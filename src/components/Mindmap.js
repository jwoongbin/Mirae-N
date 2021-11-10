import "./Mindmap.css"
import logo from '../logo.png';
import book from '../Book.png';
import {BrowserRouter, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';


function Mindmap({data}){
  console.log(data[0].subs[0].mindmap.title);
  const [click, setClick] = useState(false);

  function onClick(){
    setClick(click => !click);
    console.log(click);
  }
  return(
    <div className="mindmap-wrap">
      <div className="header">
        <img className="logo" src={logo} />
        <h1>초코 초등사회 3-1</h1>
        <Link to="/"><img className="book" src={book} width="50px"/></Link>
      </div>
      <div className="contents">
        <div className="subject" onClick={() => onClick()}>{data[0].subs[0].mindmap.title}</div>
        <div className="sub-subject1">
          {click? data[0].subs[0].mindmap.mind_one : null}
          {click? data[0].subs[0].mindmap.contents_one : null}
        </div>

        <div className="sub-subject2">{click? data[0].subs[0].mindmap.mind_two : null}</div>
        <div className="sub-subject3">{click? data[0].subs[0].mindmap.mind_three : null}</div>
        <div className="quiz"></div>
      </div>
      <div className="footer"></div>
    </div>

  );

}
  

export default Mindmap;