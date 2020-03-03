import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [getPersonStates,setPersonState] = useState({
    persons: [
      { name: "Rohit", age: 26 },
      { name: "Rohit", age: 26 },
      { name: "Rohit", age: 26 }
    ],
    otherState : ' some Other state'
  });

  console.log(getPersonStates);
  const switchNameHandler = () => {
    // console.log('was clicked')
    setPersonState({
      persons: [
        { name: "Rohitu", age: 26 },
        { name: "Rohit", age: 26 },
        { name: "Rohit", age: 29 }
      ]
    }
    );
  }

  return (
    <div className="App">
      <h1>Hi Im a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={getPersonStates.persons[0].name} age={getPersonStates.persons[0].age} />
      <Person name={getPersonStates.persons[1].name} age={getPersonStates.persons[1].age}></Person>
      <Person name={getPersonStates.persons[2].name} age={getPersonStates.persons[2].age} />
    </div>
  );

}





export default app;
