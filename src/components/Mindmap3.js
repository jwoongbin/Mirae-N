import "./Mindmap3.scss"
import exit from '../images/exit.png';
import choco from '../images/choco.png';
import logo from '../images/logo.png';
import arrow1 from '../images/arrow1.png';
import arrow1_dot from '../images/arrow1_dot.png';
import arrow2 from '../images/arrow2.png';
import arrow2_dot from '../images/arrow2_dot.png';
import arrow3 from '../images/arrow3.png';
import arrow3_dot from '../images/arrow3_dot.png';
import background from '../images/background.png';
import cow from '../images/artwork/cow.png';
import game from '../images/artwork/game.png';
import tugging from '../images/artwork/tugging.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MindContent from "./MindContent";


function Mindmap3({ data, conindex, subindex }) {
  const [click, setClick] = useState(false);
  const mindmapData = data.contents[conindex].subs[subindex].mindmap
  console.log('마인드맵 데이타:',data, conindex);
  var mindContent = (content) =>{
    return <MindContent content={content}/>
  }
  function onClick() {
    setClick(click => !click);
  }
  const book_title = data.subject + ' '+  data.grade + '-' + data.semester;

  console.log(data, conindex ,subindex)
  return (
    <div className="mindmap-wrap">
      <div className="header">
        <img className="logo" src={logo} alt=''/>
        <div className="center">
          <img className="choco" src={choco} alt='' />
          <h1 className="book">초등 {book_title}</h1>
        </div>
        <Link to="/"><img className="exit" src={exit} alt=''/></Link>
      </div>
      <div className="contents-wrap">

      </div>
      <div className="contents">
        <div className="mindmap-box">
          <div className="subject">
            <div className="subject-wrap"onClick={() => onClick()} >
              <img className="background" src={background} alt='' />
              <div className="text">{mindmapData.title}</div>
            </div>

            <div className="item1" style={{display : click? "" : "none"}}>
              <div className="subject">
                {click ? mindContent(mindmapData.mind_one) : null}
                {click ? <img className="arrow" src={arrow1} alt=''/> : null}
                {click ? <img className="dot_arrow" src={arrow1_dot} alt=''/> : null}
                {click ? <img className="artwork" src={tugging} alt=''/> : null}
              </div>
              <div className="content">{click ? mindContent(mindmapData.contents_one) : null}</div>
            </div>
            <div className="item2" style={{display : click? "" : "none"}}>
              <div className="subject">
                {click ? mindContent(mindmapData.mind_two) : null}
                {click ? <img className="arrow" src={arrow2} alt=''/> : null}
                {click ? <img className="dot_arrow" src={arrow2_dot} alt=''/> : null}
                {click ? <img className="artwork" src={game} alt=''/> : null}
              </div>
              <div className="content">{click ?mindContent(mindmapData.contents_two) : null}</div>
            </div>
            <div className="item3" style={{display : click? "" : "none"}}>
              <div className="subject">
                {click ? mindContent(mindmapData.mind_three) : null}
                {click ? <img className="arrow" src={arrow3} alt=''/> : null}
                {click ? <img className="dot_arrow" src={arrow3_dot} alt=''/> : null}
                {click ? <img className="artwork" src={cow} alt=''/> : null}
              </div>
              <div className="content">{click ? mindContent(mindmapData.contents_three) : null}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
    </div>

  );

}


export default Mindmap3;