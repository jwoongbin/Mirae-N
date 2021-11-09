import './Home.css';
import logo from '../textbook_OGtag.jpg';
import Contents from './Contents';

function Home({data}){
  return (
    <div className="wrap">
      <div className="container">
          <div className="header">
            <img className="logo" src={logo} width="50%"/>
            {/* <div className="title"><h1>미래엔 초코 초등사회 3-1</h1></div> */}
          </div>
          <div className="content">
              <Contents data={data} />
          </div>
      </div>  
      <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
    </div>
  );
}

export default Home;