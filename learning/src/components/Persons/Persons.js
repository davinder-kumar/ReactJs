import React, { Component } from 'react'
import Person from '../Persons/Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("[Persons.js]In Constructor", props)
    }
    UNSAFE_componentWillReceiveProps (nextpropos) {
        console.log("[Persons.js] In componentWillReceiveProps()", nextpropos)
    }
    shouldComponentUpdate(nextpropos, nextState) {
        console.log("[Persons.js] In shouldComponentUpdate()", nextpropos, nextState)
        return nextpropos.persons != this.props.persons ||
               nextpropos.change != this.props.change ||
               nextpropos.delete != this.props.delete
    }
    componentWillUpdate(nextpropos, nextState) {
        console.log("[Persons.js] In componentWillUpdate()", nextpropos, nextState)
        // return false;
    }
    componentDidUpdate() {
        console.log("[Persons.js] In componentDidUpdate()")
        // return false;
    }
    UNSAFE_componentWillMount() {
        console.log("[Persons.js] In componentWillMount()")
    }
    componentDidMount() {
        console.log("[Persons.js] In componentDidMount()")
    }

    render() {
        console.log("Persons.js In render()")
        return this.props.persons.map((person, index) => (
            <Person
                name={person.name}
                age={person.age}
                id={person.id}
                change={this.props.change.bind(this, person.id)}
                clickProp={this.props.delete.bind(this, index)}
                key={person.id}
            />
        )
        )
    }
}


export default Persons