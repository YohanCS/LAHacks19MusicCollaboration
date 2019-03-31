import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }

  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} />
      </BrowserRouter>
    );
  }
}

export default App;
