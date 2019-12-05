import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {
        name: 'Matthew', age: 24, id:1
      },

      {
        name: 'manu', age: 18,id:2
      },
      {
        name: 'sdsd', age: 180,id:3
      }
    ],
    showPersons: false
  }
  deleteHandler = (index) => {
    const arr = [...this.state.persons];
    console.log(arr);
    arr.splice(index,1);
    this.setState({
      persons : arr
    });
  }
  ToggleDataHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }
  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id == id
    })

    const persons = [...this.state.persons]
    const person = {...persons[personIndex]};
    console.log(person)
    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
    // this.setState({
    //   persons: [
    //     {
    //       name: "Matthew", age: 2
    //     },

    //     {
    //       name: event.target.value, age: 232
    //     },
    //     {
    //       name: 'sddsdssd', age: 80
    //     }
    //   ]
    // });
  }
  render() {
    const style = {
      backgroundColor: '#FFF',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key = {person.id}
              id = {person.id}
              change = {(event) =>this.nameChangeHandler(event,person.id)}
              clickProp={this.deleteHandler.bind(this, index)}
            />

          })}
          {/* <Person
            age={this.state.persons[0].age}
            name={this.state.persons[0].name}
            clickProp={this.clickHandler.bind(this, "gdha")}
          />

          <Person
            age={this.state.persons[1].age}
            name={this.state.persons[1].name}
            change={this.nameChangeHandler}
          >

          </Person>
          <Person
            age={this.state.persons[2].age}
            name={this.state.persons[2].name}>

          </Person> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>
          My name is anthony gonsalves
      </h1>
        <button style={style} onClick={this.ToggleDataHandler}>Toggle Data</button>
        {persons}

      </div >
    );
    // return React.createElement('div',{ className:'App' },React.createElement("h1",null,"Test"));
  }
}

export default App;
