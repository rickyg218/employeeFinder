import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Employee from "./components/pages/Employee";
import Portfolio from './components/PortfolioContainer';

function App(){
  return(
    <Router>
      <div>
        <NavTabs/>
        <Switch>
        <Route exact path = "/Home" component={Home} />
        <Route exact path = "/Portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
