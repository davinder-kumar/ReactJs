import React from 'react'
import classes from './Cockpit.module.css'
const Cockpit = (props) => {
    const classess = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red;
    }
    if (props.persons.length <= 2) {
        classess.push(classes.bold);
    }
    if (props.persons.length <= 1) {
        classess.push(classes.red);
    }

    return <div className={classes.CockpitCss}> 
        <p className={classess.join(' ')}>
            My name is anthony gonsalves
      </p>
        <button className={btnClass} onClick={props.toggle}>Toggle Data</button>
    </div>
}

export default Cockpit