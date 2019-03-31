import React, { Component } from 'react';
import index from "./index.js"

class Homepage extends Component {
  render() {
    return (
     <BrowserRouter>
        <Route exact path="/homepage" component={index} />
     </BrowserRouter>
    );
  }
}

export default Homepage;