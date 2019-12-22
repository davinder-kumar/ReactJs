import React from 'react'
import Person from '../Persons/Person/Person'

const persons = (props) => {
    return props.persons.map((person, index) => <Person
        name={person.name}
        age={person.age}
        id={person.id}
        change={props.change.bind(this, person.id)}
        clickProp={props.delete.bind(this, index)}
        key={person.id}
    />
    )
}

export default persons