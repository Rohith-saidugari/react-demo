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

  switchNameHandler = (newName) => {
    // console.log('was clicked')
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: "Rohit", age: 26 },
        { name: "Rohit", age: 29 }
      ]
    }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
      {//Binding switchnamehandler to class
      }
        <button onClick={this.switchNameHandler.bind(this,"Passed Name Clicked button")}>Switch Name</button>
        {//<button onClick={() => this.switchNameHandler("From Button Click")}>Switch Name</button>
        }
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} >
        </Person>
        <Person
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,"Passed Name Clicked P" )}>
          My Hobbies Photography
        </Person>
        <Person
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} >
        </Person>
      </div>
    );
  }
}

export default App;
