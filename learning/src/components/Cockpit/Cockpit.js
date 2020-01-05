import React from 'react'
import classes from './Cockpit.module.css'
import Aux from '../../hoc/Auxiliary'
const Cockpit = (props) => {
    const classess = [];
    let btnClass = classes.button;
    if (props.showPersons) {
        btnClass = [btnClass,classes.red].join(" ");
    }
    if (props.persons.length <= 2) {
        classess.push(classes.bold);
    }
    if (props.persons.length <= 1) {
        classess.push(classes.red);
    }

    return (
        <Aux>
            <div className={classess.join(' ')}>
                <h2>{props.appTitle}</h2>
            </div>
            <button className={btnClass} onClick={props.toggle}>Toggle Data</button>
            <button onClick={props.login}>Login</button>
        </Aux>
    )
}

export default Cockpit