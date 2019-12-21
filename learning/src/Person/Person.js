import React from 'react'
import classes from './Person.module.css';
const person = (props) => {

    let rnd = Math.random();
    if(rnd > 0.7){
        throw new Error("MCG");
    }

    return (

        <div className={classes.Person}>
            <p onClick={props.clickProp}> History, I am {props.name}. I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>

    );

}
export default person