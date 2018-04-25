import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: "Lil Nigga",
        age: "20"
      },
      {
        name: "Lil Chigga",
        age: "36"
      },
      {
        name: "Lil Wigga",
        age: "19"
      }
    ]
  }

  switchNameHandler = () => {
    // console.log("Switch name clicked!");
    this.setState({
      persons: [
        {
          name: "Lil Bigga",
          age: "20"
        },
        {
          name: "Lil Chigga",
          age: "45"
        },
        {
          name: "Lil Shiigga",
          age: "19"
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch names!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Dank Memes</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
