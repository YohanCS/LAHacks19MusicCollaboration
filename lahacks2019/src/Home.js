import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
// Two buttons used for login/register
import Button from '@material-ui/core/Button';
import './Home.css'
import logo from './logo.png';
import Typography from '@material-ui/core/Typography';


// used to dictate the homepage
class Home extends Component {

    render() {
        return(
            <div className="container">

                <div className="logo">
                    <img src={logo} alt="Logo"></img>
                </div>

                <div className="logoName">
                    <Typography variant="h3"> Musically Attached </Typography>
                </div>

                <div className="loginButton">
                    <Link to="/login">

                        <Button className="button" size="large" variant='contained' color='primary'>
                            Login
                        </Button>
                    </Link>
                </div>
                <div className="registerButton">
                    <Link to="/register">
                        <Button className="button" size="large" variant='contained' color='primary' to="/register">
                            Register
                        </Button>
                    </Link>
                </div>

            </div>
        );
    }
}

// have to add at end of each component so others can use it
export default Home; 
