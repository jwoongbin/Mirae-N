import './Home.css';
import Contents from './Contents';
import newdata from '../data.json'
import useFullscreen from "./useFullscreen";

function Home({data}){

  // const datas = newdata.map((item, index) => {
  //   return item
  // })
  console.log(newdata.contents);
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { triggerFull } = useFullscreen(onFullS);
  triggerFull();
  return (
    <div className="wrap">
      <div className="contents">
        <div className="header">
        {/* <img className="logo" src={logo} width="50%"/> */}
        </div>
        <div className="content">
            <Contents data={data} />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Home;