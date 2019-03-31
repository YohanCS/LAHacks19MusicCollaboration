import React, { Component } from 'react'; 
import {
    Link
  } from "react-router-dom";
// Two buttons used for login/register 
import Button from '@material-ui/core/Button';
import './Home.css'


// used to dictate the homepage 
class Home extends Component {   

    render() {
        return(
            <div className="container">
                <div className="logo">
                    <img href="./../../img/cake.png" alt="Logo"></img>
                </div>

                <div className="loginButton">
                    <Link to="/login">
                        <Button className="button" variant='contained' color='primary'>
                            Login 
                        </Button>
                    </Link>
                </div>
                <div className="registerButton">
                    <Link to="/register">
                        <Button className="button" variant='contained' color='primary' to="/register">
                            Register 
                        </Button>
                    </Link>
                </div>
                <div className="learnMore">
                    <Link to="/learn">
                        <Button className="button" variant='contained' color='primary' to='/learn'>
                            Learn More About Us 
                        </Button>
                    </Link>
                </div>

            </div>
        );
    }
}

// have to add at end of each component so others can use it
export default Home; 