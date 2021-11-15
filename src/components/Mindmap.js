import "./Mindmap.css"
import exit from '../images/exit.png';
import choco from '../images/choco.png';
import logo from '../images/logo.png';
import { BrowserRouter, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Mindmap({ data }) {
  const [click, setClick] = useState(false);

  function onClick() {
    setClick(click => !click);
  }
  return (
    <div className="mindmap-wrap">
      <div className="header">
        <img className="logo" src={logo} width="15%" />
        <div className="center">
          <img className="choco" src={choco} width= "20%" />
          <h1 className="book">초등 사회 3-1</h1>
        </div>
        <Link to="/"><img className="exit" src={exit} /></Link>
      </div>
      <div className="contents">
        <div className="mindmap-box">
          <div className="subject">
            <div onClick={() => onClick()}>{data[0].subs[0].mindmap.title}</div>
            <div className="item1">
              <div className="sub-subject1">{click ? data[0].subs[0].mindmap.mind_one : null}</div>
              <div className="subject1-content">{click ? data[0].subs[0].mindmap.contents_one : null}</div>
            </div>
            <div className="item2">
              <div className="sub-subject2">{click ? data[0].subs[0].mindmap.mind_two : null}</div>
              <div className="subject2-content">{click ? data[0].subs[0].mindmap.contents_two : null}</div>
            </div>
            <div className="item3">
              <div className="sub-subject3">{click ? data[0].subs[0].mindmap.mind_three : null}</div>
              <div className="subject3-content">{click ? data[0].subs[0].mindmap.contents_three : null}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
    </div>

  );

}


export default Mindmap;