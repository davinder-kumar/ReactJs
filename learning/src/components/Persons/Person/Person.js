import React, { Component } from 'react'
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux'
import withclass from '../../../hoc/withClass'
import propTypes from 'prop-types'
import {AuthContext} from '../../../containers/App'
class Person extends Component {
    constructor(props) {
        super(props);
        console.log("[Person.js]In Constructor", props)
        this.inputEle = React.createRef();
    }
    UNSAFE_componentWillMount() {
        console.log("[Person.js] In componentWillMount()")
    }
    componentDidMount() {
        console.log("[Person.js] In componentDidMount()")
        // if(this.props.position==0)
        // this.inputEle.current.focus();
    }
    focusEle() {
        this.inputEle.current.focus();
    }
    render() {
        console.log("Person.js In render()")
        return (
            // <Withclass classesAttr={classes.Person}>
            <Aux>
                <p>
                    <AuthContext.Consumer>
                        {authVal => authVal ? "I am authenticated user!":null}
                    </AuthContext.Consumer>
                </p>
                <p onClick={this.props.clickProp}> History, I am {this.props.name}. I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name}
                    ref={this.inputEle}
                />
            </Aux>
            // </Withclass>
        )
    }
}
Person.propTypes = {
    age: propTypes.number,
    clickProp: propTypes.func,
    name: propTypes.string,
    change: propTypes.func
}
export default withclass(Person, classes.Person)