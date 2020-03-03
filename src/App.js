import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Rohit", age: 26 },
      { name: "Rohit", age: 26 },
      { name: "Rohit", age: 26 }
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked')
    this.setState({
      persons: [
        { name: "Rohitu", age: 26 },
        { name: "Rohit", age: 26 },
        { name: "Rohit", age: 29 }
      ]}
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
