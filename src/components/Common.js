import "./Common.scss";
import exit from '../images/exit.png';
import choco from '../images/choco.png';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import Mindmap from './Mindmap';
import Mindmap2 from './Mindmap2';
import Mindmap3 from './Mindmap3';
import Mindmap4 from './Mindmap4';
import Quiz from './Quiz';
import subject_sc from '../images/background-society.png';
import subject_kr from '../images/background-korean.png';


function Common ({data, conindex, subindex, type}) {
  console.log(data);
  //마인드맵 대주제 배경색 -> 국어(_green) or 사회(_red)
  const subject_background = data.subject === '국어' ? subject_kr : subject_sc;
  console.log(subject_background);
  var returnvalue;
  switch(type){
    case 1 : {
      returnvalue = <Mindmap data={data} conindex={conindex} subindex={subindex} background={subject_background}/>
      break;
    }
    case 2 : {
      returnvalue = <Mindmap2 data={data} conindex={conindex} subindex={subindex} background={subject_background}/>
      break;
    }
    case 3 : {
      returnvalue = <Mindmap3 data={data} conindex={conindex} subindex={subindex} background={subject_background}/>
      break;
    }
    case 4 : {
      returnvalue = <Mindmap4 data={data} conindex={conindex} subindex={subindex} background={subject_background}/>
      break;
    }
    case 5 : {
      returnvalue = <Quiz data={data} conindex={conindex} subindex={subindex} />
      break;
    }
    default : {
      returnvalue = <Mindmap data={data} conindex={conindex} subindex={subindex} background={subject_background}/>
      console.log("오류");
    }
  }
  const book_title = data.subject + ' '+  data.grade + '-' + data.semester;
  return (
  <div className="wrapper">
    <div className="header">
      <img className="logo" src={logo} alt=''/>
      <div className="center">
        <img className="choco" src={choco} alt='' />
        <h1 className="book">{book_title}</h1>
      </div>
      <Link to={data.book_url.replace("https://edubook.mirae-n.com","")}><img className="exit" src={exit} alt=''/></Link>
    </div>
    <div className={"contents" + (type === 5 ? " q" : "")}>
      {returnvalue}
    </div>
    <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
  </div>
  )
}
export default Common;