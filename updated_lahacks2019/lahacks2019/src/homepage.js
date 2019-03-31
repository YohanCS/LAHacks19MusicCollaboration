import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Login from './Login';
import { firebase, lahacks ,music } from './components/Firebase/firebase'
import {
  Route,
  BrowserRouter
} from "react-router-dom";

import {
    Link
  } from "react-router-dom";
// Two buttons used for login/register
import Button from '@material-ui/core/Button';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      dob:'',
      address:'',
      gender:'',
      genre:'',
      speciality:'',
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
  handleClick(event,role){
    // console.log("values in register handler",role);
    //To be done:check for empty values before hitting submit
    if(this.state.first_name.length>0 && this.state.last_name.length>0 && this.state.email.length>0 && this.state.password.length>0 ){
      var payload={
      "first_name": this.state.first_name,
      "last_name":this.state.last_name,
      "userid":this.state.email,
      "password":this.state.password,
      "dob":this.state.dob,
      "address":this.state.address,
      "gender":this.state.gender,
      "genre":this.state.genre,
      "speciality":this.state.speciality,
      "role":role
      }

      firebase.auth().createUserWithEmailAndPassword(payload.userid,payload.password)
      .then(function(response) {
        console.log(response.user,response.user.uid);
        lahacks.doc(response.user.uid).set({
          "First_Name": payload.first_name,
          "Last_Name": payload.last_name,
        })
        .then(function() {
            console.log("Document 1 successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

                music.doc(response.user.uid).set({
                  "Email id": payload.userid,
                  "Password":payload.password,
                  "Date of Birth": payload.dob,
                  "Address ": payload.address,
                  "Gender":payload.gender,
                  "Genre":payload.genre,
                  "Speciality":payload.speciality,
                })
                .then(function() {
                    console.log("Document 2 successfully written!");
                    alert("Thank you for the Registration. !!!");
                      return (
                    <BrowserRouter>
                        <Route exact path="/login" component={Login} />
                    </BrowserRouter>
                  );

                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });


      })
      .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        console.log("create user failed : ",errorCode,errorMessage);
        });
      console.log("Payload : " + payload["first_name"]);
    }
    else{
      alert("Input field value is missing");
      return (
    <BrowserRouter>
        <Route exact path="/Register" component={Register} />
    </BrowserRouter>
  );
    }

  }
  render() {
    // console.log("props",this.props);
    var userhintText,userLabel;
    userhintText="Enter your User Id";
    userLabel="User Id";
    return (
      <div className="containerLogin">


           <div className="top">
              <MuiThemeProvider>
              <AppBar
                title="Register"
              />
              </MuiThemeProvider>
           </div>
           <div className="bottom">
            <MuiThemeProvider>
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange = {(event,newValue) => this.setState({first_name:newValue})}
              />
            <br/>
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange = {(event,newValue) => this.setState({last_name:newValue})}
              />
            <br/>
            <TextField
              hintText={userhintText}
              floatingLabelText={userLabel}
              onChange = {(event,newValue) => this.setState({email:newValue})}
              />
            <br/>
            <TextField
              type = "password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange = {(event,newValue) => this.setState({password:newValue})}
              />
            <br/>
            <TextField
              hintText="Enter DoB age"
              floatingLabelText="Date"
              onChange = {(event,newValue) => this.setState({password:newValue})}
              />
            <br/>
            <TextField
              hintText="Enter your Address"
              floatingLabelText="Address"
              onChange = {(event,newValue) => this.setState({password:newValue})}
              />
            <br/>
            <TextField
              hintText="Enter your gender"
              floatingLabelText="Gender"
              onChange = {(event,newValue) => this.setState({password:newValue})}
              />
            <br/>
            <TextField
              hintText="Enter your Genre"
              floatingLabelText="Genre"
              onChange = {(event,newValue) => this.setState({password:newValue})}
              />
            <br/>
            <TextField
              hintText="Enter your Speciality"
              floatingLabelText="Speciality"
              onChange = {(event,newValue) => this.setState({password:newValue})}
              />
            <br/>

            <div className="submitButton">
                <Link to="/login">

                    <Button className="button" primary={true} style={style} size="large" variant='contained' color='primary' onClick={(event) => this.handleClick(event,this.props.role)}>
                        Submit
                    </Button>
                </Link>
            </div>
            </MuiThemeProvider>
          </div>

      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;
