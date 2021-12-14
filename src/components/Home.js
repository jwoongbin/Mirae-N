import './Home.scss';
import Contents from './Contents';
import useFullscreen from "./useFullscreen";
import choco from "../images/web/choco.png";
import logo from "../images/web/logo.png";
import cloud1 from "../images/web/cloud1.png";
import cloud2 from "../images/web/cloud2.png";
import cloud3 from "../images/web/cloud3.png";

function Home({data}){
  const book_title = '초등 ' + data.subject + ' '+  data.grade + '-' + data.semester;
  console.log(data);
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { triggerFull } = useFullscreen(onFullS);
  triggerFull();

  const background = (subject) => {
    if(subject === '국어'){
      return {
        background: 'rgb(255, 163, 156, 0.4)',
      }
    }else if(subject ==='사회') {
      return {
        background: 'rgb(0, 176, 91, 0.4)',
      }
    }else if(subject ==='수학'){
        return{
          background: 'rgb(84, 96, 181,0.4)',
        }
    }
  }
  
  const bookUrl = data.subject + data.grade + '-' + data.semester;
  return (
    <div className="home-wrap" style={background(data.subject)}>      
      <div className="header"></div>
      <div className="content">
        <div className="frame">
          <div className="img-box">
            <img src={logo} className="logo" alt=""/>
            <img src={choco} className="choco" alt=""/>
            <img src={cloud3} className="cloud3" alt=""/>
            <img src={cloud2} className="cloud2" alt=""/>
            <img src={cloud1} className="cloud1" alt=""/>
          </div>
          <div className="top">
            <div className="book-title"><span>{book_title}</span></div>
            <img className="book-cover" src={'/image/'+bookUrl+'/'+data.cover_img} alt=""/>
          </div>
          <div className="accordion-box">
            <Contents data={data} />
          </div>
          <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
        </div>
      </div>  
      
    </div>
  );
}

export default Home;