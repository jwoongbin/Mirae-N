import './Home.scss';
import Contents from './Contents';
import newdata from '../data.json'
import useFullscreen from "./useFullscreen";
import frame from "../images/web/frame.png";

function Home({data}){

  console.log(newdata.contents);
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { triggerFull } = useFullscreen(onFullS);
  triggerFull();
  return (
    <div className="home-wrap">
      <div className="contents">
        <div className="header">
        {/* <img className="logo" src={logo} width="50%"/> */}
        </div>
        <div className="content">
          <div className="frame">
            <div className="book-title">초등 사회 3-1</div>
            <Contents data={data} />
            <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Home;