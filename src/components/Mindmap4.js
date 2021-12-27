import "./Mindmap4.scss"
import arrow1 from '../images/4arrow1.png';
import { useState, useContext } from 'react';
import MindContent from "./MindContent";
import { typeFourImage } from "../common/utils";
import { boxStyle, titleStyle } from '../common/utils.js';
import AccordionContext from '../contexts/AccordionContext';
import { BASE_URL } from "../constants";

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
  let context = useContext(AccordionContext);
  context.setAcorindex(conindex)
  return (
    <div className="mindmap4-box">
      <div className="subject">
        <div className="subject-wrap"onClick={() => onClick()} >
          <img className="background" src={background} alt='' />
          <div className="text">{mindmapData.title}</div>
        </div>
        {(click && filelist[0] != '') ? <div className="artwork1"><img className="artworkImg" src={`${BASE_URL}/image/`+book_image+filelist[0]} alt=''/></div> : null}
        <div className="item1" style={{display : click? "" : "none"}}>
          {click ? <img className="arrow" src={arrow1} alt=''/> : null}
          <div className="content" style={boxStyle(data.subject)}>
            {click ? mindContent(mindmapData.contents_one) : null}
            {(click && filelist[1] != '') ? <div className="artwork2"><img className="artworkImg" src={`${BASE_URL}/image/`+book_image+filelist[1]} alt=''/></div> : null}
            {(click && filelist[2] != '') ? <div className="artwork3"><img className="artworkImg" src={`${BASE_URL}/image/`+book_image+filelist[2]} alt=''/></div> : null}
            {(click && filelist[3] != '') ? <div className="artwork4"><img className="artworkImg" src={`${BASE_URL}/image/`+book_image+filelist[3]} alt=''/></div> : null}
            </div>
        </div>
      </div>
    </div>
  );

}


export default Mindmap4;