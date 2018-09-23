import React, { Component } from 'react'; 
import './App.css';
import NavBar from './Components/NavBar';
import ListDisplay from './Components/ListDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ListDisplay />
      </div>
    );
  }
}

export default App;
