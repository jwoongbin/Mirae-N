import "./Mindmap4.scss"
import arrow1 from '../images/4arrow1.png';
import { useState } from 'react';
import MindContent from "./MindContent";
import { typeFourImage } from "../common/utils";
import { boxStyle, titleStyle } from '../common/utils.js';


function Mindmap4({ data, conindex, subindex, background }) {
    console.log('마인드맵 데이타 : ',data," conindex : ", conindex, " subindex : ",subindex);
  const [click, setClick] = useState(false);
  const mindmapData = data.contents[conindex].subs[subindex].mindmap
  
  var filelist = typeFourImage(mindmapData.image_one)

  var mindContent = (content) =>{
    return <MindContent content={content}/>
  }
  function onClick() {
    setClick(click => !click);
  }
  const book_image = data.subject +  data.grade + '-' + data.semester + '/';

  console.log(data, conindex ,subindex)
  return (
    <div className="mindmap4-box">
      <div className="subject">
        <div className="subject-wrap"onClick={() => onClick()} >
          <img className="background" src={background} alt='' />
          <div className="text">{mindmapData.title}</div>
        </div>
        {(click && filelist[0] != '') ? <img className="artwork1" src={'/image/'+book_image+filelist[0]} alt=''/> : null}
        <div className="item1" style={{display : click? "" : "none"}}>
          {click ? <img className="arrow" src={arrow1} alt=''/> : null}
          <div className="content" style={boxStyle(data.subject)}>
            {click ? mindContent(mindmapData.contents_one) : null}
            {(click && filelist[1] != '') ? <img className="artwork2" src={'/image/'+book_image+filelist[1]} alt=''/> : null}
            {(click && filelist[2] != '') ? <img className="artwork3" src={'/image/'+book_image+filelist[2]} alt=''/> : null}
            {(click && filelist[3] != '') ? <img className="artwork4" src={'/image/'+book_image+filelist[3]} alt=''/> : null}
            </div>
        </div>
      </div>
    </div>
  );

}


export default Mindmap4;