import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import Button from '@material-ui/core/Button';

import Search from './components/search/Search.js';
import Home from './components/homepage/Home.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false 
    };
  }

  render() { 
    return (
      <BrowserRouter>
        <Route path="/" component={Home} />
       {/* <Route path="/register" component={Register} />
        <Route path="/login" component={Login} /> */}
      </BrowserRouter>
    ); 
  }
}

export default App;
