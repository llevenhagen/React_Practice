import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a react app</h1>
      <Person name="Max" age="28"/>
      <Person name="Laura" age="30"/>
      <Person name="Stephanie" age="23"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
