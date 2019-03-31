import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import Login from './Login';
import Register from './Register';
import {
  Route,
=======
import LoginScreen from './Loginscreen';
import {
  Route,
  NavLink,
>>>>>>> b15c1afd19cb7ad570a41825a9a7b43fc82843c9
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
<<<<<<< HEAD
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} />
=======
          <Route exact path="/login" component={LoginScreen} />
>>>>>>> b15c1afd19cb7ad570a41825a9a7b43fc82843c9
      </BrowserRouter>
    );
  }
}

export default App;
