import React from 'react'
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.clickProp}> History, I am {props.name}. I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} defaultValue={props.name} />
        </div>
    );

}
export default person