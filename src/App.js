import './App.css'
import newdata from './data.json'
import Home from './components/Home';
import './components/Home.scss';
import Mindmap from './components/Mindmap';
import Mindmap2 from './components/Mindmap2';
import Mindmap3 from './components/Mindmap3';
import Mindmap4 from './components/Mindmap4';
// import Mindmap2 from './components/Mindmap2';
import Quiz from './components/Quiz';
import Common from './components/Common';

import {BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
          <Route exact path={newdata[0].book_url.replace("https://edubook.mirae-n.com","")} render={() => <Home data={newdata[0].contents}/>}/>
      {newdata.map((data) => (
        <>
          {data.contents.map((content, indexa) => (
            content.subs.map((sub, indexb) => (
              sub.btns.map((btn, indexc) => {
                if(btn.btn_name === "마인드맵"){
                  console.log(btn.btn_url.replace("https://edubook.mirae-n.com",""));
                  var mindurl = btn.btn_url.replace("https://edubook.mirae-n.com","");
                  var returnvalue = <Route key={"" + indexa +""+ indexb + "" + indexc} path={mindurl} render={() => <Common data={data} conindex={indexa} subindex={indexb} type={sub.mindmap.type} />} />
                  return returnvalue;
                }else if(btn.btn_name === "추가문제"){
                  var quizurl = btn.btn_url.replace("https://edubook.mirae-n.com","");
                  return <Route key={"" + indexa +""+ indexb + "" + indexc} path={quizurl} render={() => <Common data={data} conindex={indexa} subindex={indexb} type={5}/>} />
                }else{
                  return true
                }
              })
            ))
          ))}

        </>
      ))}

    </Router>
  )
} 
 
export default App;
