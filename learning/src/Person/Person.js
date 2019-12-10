import React from 'react'
import Radium from 'radium'
import './Person.css';
const person = (props) => {
    const style = {
        '@media (min-width:500px)': {
            width: '200px'
        }
    }
    return (

        <div style={style} className="Person">
            <p onClick={props.clickProp}> History, I am {props.name}. I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>

    );

}
export default Radium(person)