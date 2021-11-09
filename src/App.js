import './App.css'
import data from './testjson.json';
import Home from './components/Home';
import './components/Home.css';
import Mindmap from './components/Mindmap';
import Quiz from './components/Quiz';

import {BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/" render={() => <Home data={data}/>}/>
        <Route path="/mindmap" render={() => <Mindmap data={data}/>} />
        <Route path="/quiz" render={() => <Quiz data={data}/>} />
    </Router>
  )
} 
 
export default App;
