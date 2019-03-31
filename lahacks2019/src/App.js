import React, { Component } from 'react';
import './App.css';
import LoginScreen from './Loginscreen';
import {
  Route,
  NavLink,
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
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginScreen} />
      </BrowserRouter>
    );
  }
}

export default App;
