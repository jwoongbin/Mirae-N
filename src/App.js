import './App.css'
import newdata from './data.json'
import Home from './components/Home';
import './components/Home.scss';
import Common from './components/Common';

import {BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
function App() {
  console.log(newdata);
  return (
    <Router>
      {newdata.map((data, index) => (
        <React.Fragment key={index}>
        <Route key={index} exact path={data.book_url.replace("https://edubook.mirae-n.com","")} render={() => <Home data={data}/>}/>
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

        </React.Fragment>
      ))}

    </Router>
  )
} 
 
export default App;
