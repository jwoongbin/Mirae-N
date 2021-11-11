import './Home.css';
import logo from '../textbook_OGtag.jpg';
import Contents from './Contents';

function Home({data}){
  return (
    <div className="wrap">
      <div className="header">
      {/* <img className="logo" src={logo} width="50%"/> */}
      </div>
      <div className="content">
          <Contents data={data} />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Home;