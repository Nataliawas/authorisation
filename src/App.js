import React, { Component } from 'react';
import faker from 'faker';
import Register from './Register'
import Cats from './Cats'



class App extends Component {

  state = {
  
  }



  render() {
    // const { cats } = this.state;
    // const cats = this.state.cats;
    return (
      <div className="App">
      <Register />
      <Cats />
      </div>
    );
  }
}

export default App;
