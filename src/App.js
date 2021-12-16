import './App.css'
import newdata from './data.json'
import Home from './components/Home';
import './components/Home.scss';
import Common from './components/Common';
import {BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import React, {useState} from 'react';
import { ContextProvider } from './contexts/AccordionContext';
function App(props) {
  const current = decodeURI(window.location.href);
  const search = current.split("?")[1];
  const params = new URLSearchParams(search);
  const keywords = params.get('keywords');
  console.log("keywords : " , keywords)
  if(keywords != null){
    props.history.push(keywords)
  }
  console.log(newdata);
  const [acorindex, setAcorindex] = useState();
  return (
    <Router>
      <ContextProvider value={{acorindex, setAcorindex}}>
        {newdata.map((data, index) => (
          <React.Fragment key={index}>
          <Route key={index} exact path={data.book_url.replace("https://edubook.mirae-n.com","")} render={() => <Home data={data}/>}/>
            {data.contents.map((content, indexa) => (
              content.subs.map((sub, indexb) => (
                sub.btns.map((btn, indexc) => {
                  if(btn.btn_name === "마인드맵"){
                    var mindurl = btn.btn_url.replace("https://edubook.mirae-n.com","");
                    console.log(mindurl);
                    var returnvalue = <Route key={"" + indexa +""+ indexb + "" + indexc} path={mindurl} render={() => <Common data={data} conindex={indexa} subindex={indexb} type={sub.mindmap.type} />} />
                    return returnvalue;
                  }else if(btn.btn_name === "추가문제"){
                    var quizurl = btn.btn_url.replace("https://edubook.mirae-n.com","");
                    return <Route key={"" + indexa +""+ indexb + "" + indexc} path={quizurl} render={() => <Common data={data} conindex={indexa} subindex={indexb} type={6}/>} />
                  }else{
                    return true
                  }
                })
              ))
            ))}

          </React.Fragment>
        ))}
      </ContextProvider>

    </Router>
  )
} 
export default withRouter(App);
