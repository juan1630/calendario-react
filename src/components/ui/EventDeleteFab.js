import React from 'react'
import { useDispatch } from 'react-redux'
import { eventDeleted } from '../../actions/events';

export const EventDeleteFab = () => {

    const dispatch = useDispatch();

    const handleDeleteEvent = () => {
        dispatch( eventDeleted())
    }

    return (
        <button 
            className="btn btn-danger fab-danger" 
            onClick={handleDeleteEvent}
            >
            <i className="fa fa-trash">  </i>
            <span>Borra evento</span>
        </button>
    )
}
