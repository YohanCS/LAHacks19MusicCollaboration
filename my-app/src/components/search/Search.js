// File used to create the main page with the search bar 
// which later calls on backend to retrieve data 
import React, { Component } from 'react';
// AppBar used at the top of the page for login 
// https://material-ui.com/demos/app-bar/
import AppBar from '@material-ui/core/AppBar' 

class Search extends Component { 
    constructor() {
        super();
        // Components are composed of states which are properties we can access
        this.state = {
            value: ""
        };
        
        // used to see if there is a change and submit handling
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        console.log("A search was submitted");
        event.preventDefault(); //incase event is not explicitly handled
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Looking for:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

// have to add at end of each component so others can use it
export default Search; 