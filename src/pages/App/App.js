import React, { Component } from 'react';
import '../../pages/App/App.css';
import Temp from '../../components/Temp/Temp';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Project 4</header>
        <Temp />
      </div>
    );
  }
}



export default App;
