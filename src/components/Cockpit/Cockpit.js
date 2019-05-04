import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

    let assignedClasses = []
    let btnClass = ''

    if(props.showPersons){
        btnClass = classes.red
    }

    if(props.persons.length <= 2){
      assignedClasses.push( classes.red ) // classes = ['red]
    }
    if(props.persons.length <= 1)
    assignedClasses.push( classes.bold ) // classes = ['red', 'bold']

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>let's finaly try to see!!!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle person</button>
        </div>
    )
}

export default cockpit