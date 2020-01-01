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
        <div className={classess.join(' ')}>
            <h2>{props.appTitle}</h2>
      </div>
        <button className={btnClass} onClick={props.toggle}>Toggle Data</button>
    </div>
}

export default Cockpit