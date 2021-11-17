import './App.css'
import data from './testjson.json';
import newdata from './data.json'
import Home from './components/Home';
import './components/Home.css';
import Mindmap from './components/Mindmap';
import Quiz from './components/Quiz';

import {BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
            <Route exact path="/" render={() => <Home data={newdata[1].contents}/>}/>
      {newdata.map((data, index) => (
        <>
          {data.contents.map((content, indexa) => (
            content.subs.map((sub, indexb) => (
              sub.btns.map((btn, indexc) => {
                if(btn.btn_name === "마인드맵"){
                  console.log(btn.btn_url.replace("https://edubook.mirae-n.com",""));
                  var a = btn.btn_url.replace("https://edubook.mirae-n.com","");
                  return <Route key={"" + indexa + indexb + indexc} path={a} render={() => <Mindmap data={data} conindex={indexb} subindex={indexc}/>} />
                }else if(btn.btn_name === "추가문제"){
                  var a = btn.btn_url.replace("https://edubook.mirae-n.com","");
                  return <Route key={"" + indexa + indexb + indexc} path={a} render={() => <Quiz data={data} conindex={indexb} subindex={indexc}/>} />
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
