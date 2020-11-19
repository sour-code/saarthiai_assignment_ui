
import React, { Component } from "react";
import LoginForm from "./components/login-form";
import content from "./components/content";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import display from "./components/display";
class App extends Component{
 render(){

  return (
    
     <Router>
        <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/display" exact component={display} />
        <Route path="/content" component={content} />
        </Switch>
      </Router>
       
  )};

}

export default App;
