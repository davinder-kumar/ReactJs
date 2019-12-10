import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      {
        name: 'Matthew', age: 24, id: 1
      },
      {
        name: 'manu', age: 18, id: 2
      },
      {
        name: 'sdsd', age: 180, id: 3
      }
    ],
    showPersons: false
  }
  deleteHandler = (index) => {
    const arr = [...this.state.persons];
    arr.splice(index, 1);
    this.setState({
      persons: arr
    });
  }
  ToggleDataHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }
  nameChangeHandler = (id, event) => {
    event.persist();    //make event persist (out of the pool)
    // console.log(event);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const persons = [...this.state.persons]
    const person = { ...persons[personIndex] };
    // setTimeout(() => {
    //   alert(event.target.value);
    // }, 1000);

    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',

      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              id={person.id}
              change={this.nameChangeHandler.bind(this, person.id)}
              clickProp={this.deleteHandler.bind(this, index)}
            />

          })}
        </div>

      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'yellow',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("bold");
    }
    if (this.state.persons.length <= 1) {
      classes.push("red");
    }


    return (
      <StyleRoot>
        <div className="App">
          <p className={classes.join(' ')}>
            My name is anthony gonsalves
      </p>
          <button style={style} onClick={this.ToggleDataHandler}>Toggle Data</button>
          {persons}

        </div >
      </StyleRoot>
    );
  }
}
export default Radium(App);
