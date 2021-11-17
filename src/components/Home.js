import './Home.css';
import logo from '../textbook_OGtag.jpg';
import Contents from './Contents';
import newdata from '../data.json'

function Home({data}){

  // const datas = newdata.map((item, index) => {
  //   return item
  // })
  console.log(newdata.contents);
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