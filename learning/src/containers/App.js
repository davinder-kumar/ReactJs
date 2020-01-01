import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
    console.log("[App.js]In Constructor", props)
  }
  UNSAFE_componentWillMount() {
    console.log("App.js In componentWillMount()")
  }
  componentDidMount() {
    console.log("App.js In componentDidMount()")
  }

  componentWillReceiveProps(nextpropos) {
    console.log("[App.js] In componentWillReceiveProps()", nextpropos)
  }
  shouldComponentUpdate(nextpropos, nextState) {
    console.log("[App.js] In shouldComponentUpdate()", nextpropos, nextState)
    return nextState.persons !== this.state.persons ||
           nextState.showPersons !== this.state.showPersons
  }
  componentWillUpdate(nextpropos, nextState) {
    console.log("[App.js] In componentWillUpdate()", nextpropos, nextState)
    
    // return false;
  }
  componentDidUpdate() {
    console.log("[App.js] In componentDidUpdate()")
    // return false;
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
    console.log(classes);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const persons = [...this.state.persons]
    const person = { ...persons[personIndex] };
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }
  render() {
    console.log("App.js In render()")
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          change={this.nameChangeHandler}
          delete={this.deleteHandler}
          persons={this.state.persons}
        ></Persons>
      );
    }
    return (
      <div className={classes.App}>
        <button onClick={() => this.setState({showPersons :true})}>Show Persons</button>
        <Cockpit
          toggle={this.ToggleDataHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          appTitle={this.props.title}
        />
        {persons}
      </div >
    );
  }
}
export default App;
