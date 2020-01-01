import React, { Component } from 'react'
import classes from './Person.module.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("[Person.js]In Constructor", props)
    }
    UNSAFE_componentWillMount() {
        console.log("[Person.js] In componentWillMount()")
    }
    componentDidMount() {
        console.log("[Person.js] In componentDidMount()")
    }
    render() {
        console.log("Person.js In render()")
        return (
            <div className={classes.Person}>
                <p onClick={this.props.clickProp}> History, I am {this.props.name}. I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        )
    }
}
export default Person