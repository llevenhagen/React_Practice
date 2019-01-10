import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Laura', age: 30},
      {name: 'Max', age: 28},
      {name: 'Stephanie', age: 26}
    ]
  }
  switchNameHandler = () => {
    // console.log('was clicked');
     // DON'T DO THIS: this.state.persons[0] = 'Laurel'
     this.setState({persons: [
       {name: 'Laurel', age: 30},
       {name: 'Max', age: 28},
       {name: 'Stephanie', age: 26}
     ]})
  }
  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a react app</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies include Yoga and Music</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
