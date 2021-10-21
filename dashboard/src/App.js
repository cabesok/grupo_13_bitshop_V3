import React from 'react'
import './App2.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListProducts from "./components/ListProducts"
import SideBar from "./components/SideBar"


function App() {
  return (
    <div id="wrapper">
     <Router>
        <SideBar />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/ListProducts" component={ListProducts} />
      </Switch>
     </Router>
  

 

   </div>
  );
}



export default App;
