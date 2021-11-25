import "./Common.scss";
import exit from '../images/exit.png';
import choco from '../images/choco.png';
import logo from '../images/logo.png';
import { Router,Link } from 'react-router-dom';
import Mindmap from './Mindmap';
import Mindmap2 from './Mindmap2';
import Mindmap3 from './Mindmap3';
import Mindmap4 from './Mindmap4';
import Quiz from './Quiz';

function Common ({data, conindex, subindex, type}) {
  var returnvalue;
  switch(type){
    case 1 : {
      returnvalue = <Mindmap data={data} conindex={conindex} subindex={subindex}/>
      break;
    }
    case 2 : {
      returnvalue = <Mindmap2 data={data} conindex={conindex} subindex={subindex}/>
      break;
    }
    case 3 : {
      returnvalue = <Mindmap3 data={data} conindex={conindex} subindex={subindex}/>
      break;
    }
    case 4 : {
      returnvalue = <Mindmap4 data={data} conindex={conindex} subindex={subindex}/>
      break;
    }
    case 5 : {
      returnvalue = <Quiz data={data} conindex={conindex} subindex={subindex}/>
      break;
    }
    default : {
      returnvalue = <Mindmap data={data} conindex={conindex} subindex={subindex}/>
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
      <Link to="/"><img className="exit" src={exit} alt=''/></Link>
    </div>
    <div className="contents">
      {returnvalue}
    </div>
    <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
  </div>
  )
}
export default Common;