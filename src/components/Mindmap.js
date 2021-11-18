import "./Mindmap.scss"
import exit from '../images/exit.png';
import choco from '../images/choco.png';
import logo from '../images/logo.png';
import arrow1 from '../images/arrow1.png';
import arrow1_dot from '../images/arrow1_dot.png';
import arrow2 from '../images/arrow2.png';
import arrow2_dot from '../images/arrow2_dot.png';
import arrow3 from '../images/arrow3.png';
import arrow3_dot from '../images/arrow3_dot.png';
import background from '../images/background.png'
import { BrowserRouter, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Mindmap({ data, conindex, subindex }) {
  const [click, setClick] = useState(false);

  function onClick() {
    setClick(click => !click);
  }
  console.log(data, conindex ,subindex)
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
      <div className="contents-wrap">

      </div>
      <div className="contents">
        <div className="mindmap-box">
          <div className="subject">
            <div className="subject-wrap" onClick={() => onClick()}>
              <img className="background" src={background}/>
              <div className="text">{data.contents[conindex].subs[subindex].mindmap.title}</div>
            </div>

            <div className="item1" style={{display : click? "" : "none"}}>
              <div className="subject">
                {click ? data.contents[conindex].subs[subindex].mindmap.mind_one : null}
                {click ? <img className="arrow" src={arrow1}/> : null}
                {click ? <img className="dot_arrow" src={arrow1_dot}/> : null}
              </div>
              <div className="content">{click ? data.contents[conindex].subs[subindex].mindmap.contents_one : null}</div>
            </div>

            <div className="item2" style={{display : click? "" : "none"}}>
            <div className="content">{click ? data.contents[conindex].subs[subindex].mindmap.contents_two : null}</div>
              <div className="subject">
                {click ? data.contents[conindex].subs[subindex].mindmap.mind_two : null}
                {click ? <img className="arrow" src={arrow2}/> : null}
                {click ? <img className="dot_arrow" src={arrow2_dot}/> : null}
              </div>
            </div>

            <div className="item3" style={{display : click? "" : "none"}}>
              <div className="subject">
                {click ? data.contents[conindex].subs[subindex].mindmap.mind_three : null}
                {click ? <img className="arrow" src={arrow3}/> : null}
                {click ? <img className="dot_arrow" src={arrow3_dot}/> : null}
              </div>
              <div className="content">{click ? data.contents[conindex].subs[subindex].mindmap.contents_three : null}</div>
            </div>

          </div>
        </div>
      </div>
      <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
    </div>

  );

}


export default Mindmap;