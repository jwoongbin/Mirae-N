import "./Mindmap.css"
import logo from '../logo.png';
import book from '../Book.png';
import frame from '../frame.png'
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
        {/* <img className="logo" src={logo} /> */}
        <h1>초코 초등 사회 3-1</h1>
        <Link to="/"><img className="book" src={book} width="50px" /></Link>
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
      <div className="footer"></div>
    </div>

  );

}


export default Mindmap;