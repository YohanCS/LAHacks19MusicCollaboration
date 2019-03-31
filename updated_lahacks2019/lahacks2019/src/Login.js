import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Homepage from "./homepage";
import './Login.css';


import { firebase } from './components/Firebase/firebase'
import {
  Route,
  BrowserRouter
} from "react-router-dom";

import {
    Link
  } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor(props){
    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider>
        <div>
         <TextField
           hintText="Enter your User No"
           floatingLabelText="User Id"
           onChange = {(event,newValue)=>this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <div className="submitButton">
               <Link to="/homepage">

                   <Button className="button" primary={true} style={style} size="large" variant='contained' color='primary' onClick={(event) => this.handleClick(event,this.props.role)}>
                       Submit
                   </Button>
               </Link>
           </div>
       </div>
       </MuiThemeProvider>
    )
    this.state={
      username:'',
      password:'',
      menuValue:1,
      loginComponent:localloginComponent,
      loginRole:'student'
    }
  }

  handleClick(event){
    var payload={
      "userid":this.state.username,
	    "password":this.state.password,
      "role":this.state.loginRole
    }

    firebase.auth().signInWithEmailAndPassword(payload.userid,payload.password)
    .then(function(response) {
      console.log("User Authentication successfully done .. !");
      return (
    <BrowserRouter>
        <Route exact path="/homepage" component={Homepage} />
    </BrowserRouter>
  );

    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Please enter valid credentials")
        console.log("create user failed : ",errorCode,errorMessage);
      return (
    <BrowserRouter>
        <Route exact path="/" component={Login} />
    </BrowserRouter>
  );


      });

  }
  handleMenuChange(value){
    console.log("menuvalue",value);
    var loginRole;
      var localloginComponent=[];
      loginRole='student';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your User no"
             floatingLabelText="User Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
         </div>

         <div className="submitButton">
             <Link to="/homepage">

                 <Button className="button" primary={true} style={style} size="large" variant='contained' color='primary' onClick={(event) => this.handleClick(event,this.props.role)}>
                     Submit
                 </Button>
             </Link>
         </div>
         </MuiThemeProvider>
      )
    this.setState({menuValue:value,
                   loginComponent:localloginComponent,
                   loginRole:loginRole})
  }
  render() {
      return (
        <div className="containerLogin">
          <div className="top">
            <MuiThemeProvider>
            <AppBar
                title="Login"
              />
            </MuiThemeProvider>
          </div>
          <div className="bottom">
            {this.state.loginComponent}
          </div>
        </div>
      );
    }
  }
const style = {
  margin: 15,
};

export default Login;
