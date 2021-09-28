import React from 'react'

export const CalendarEvent = ({event}) => {
    // console.log(event)
    const { title, user } = event;

    return (
        <div>   
            <h1> Hola mundo</h1>
            <span> {title} </span>
            <strong> {user.name} </strong>
        </div>
    )
}
