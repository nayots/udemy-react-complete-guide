import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: "Lil Zigga",
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

  switchNameHandler = (newName) => {
    // console.log("Switch name clicked!");
    this.setState({
      persons: [
        {
          name: newName,
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Lil Higga",
          age: "20"
        },
        {
          name: event.target.value,
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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler("Chigga Boy")}>Switch names!</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Chigga Yoyo")}
          changed={this.nameChangedHandler}>My Hobbies: Dank Memes</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
