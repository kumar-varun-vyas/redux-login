import React from 'react';
import Login from './Login';

import Home from './Home';
import './App.css';
import Registration from './Registration';
import Deshbord from './DeshBord';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 

function App() {
  return (
    <React.Fragment>
    <div  className="App">
    <Router>
    <div>
      
    <ul className = "navbar">
      <li>
        <Link style={{ color:"white", display:"block",textAlign:"center", padding: "14px 16px",
         textDecoration:"none"}} to="/">home</Link>
      </li>
      <li>
        <Link style={{ color:"white", display:"block",textAlign:"center", padding: "14px 16px",
         textDecoration:"none"}} to="/login">Login</Link>
      </li>
      <li>
        <Link  style={{ color:"white", display:"block",textAlign:"center", padding: "14px 16px",
         textDecoration:"none"}} to="/Registration">Register</Link>
      </li>
      <li>
        <Link style={{ color:"white", display:"block",textAlign:"center", padding: "14px 16px",
         textDecoration:"none"}} to="/deshBord">Deshbord</Link>
      </li>
      
    </ul>
    <Switch>
      <Route exact path="/" component = {Home}></Route>
      <Route exact path="/login" component = {Login}></Route>
      <Route exact path="/registration" component = {Registration}></Route>
      <Route exact path="/deshBord" component = {Deshbord}></Route>
    </Switch>
    </div>
    </Router>

   

     {/* <Login />
     <Registration />
     <Deshbord /> */}
     </div>
     </React.Fragment>
  );
}

export default App;
