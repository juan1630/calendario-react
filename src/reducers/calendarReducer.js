import moment from "moment";
import { types } from "../types/types";

// agregar al state esta propiedad y la hace disponible para  todos 
const initialState = {
    // los eventos que tiene le calendario
    events: [{
            id: new Date().getTime(),
            title: 'Cumpleaños de alguien',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgcolor: '#FAFAFA',
            notes: 'Comprar el pastel',
            user: {
                _id: '123',
                name: 'Juan'
            }
        }],
    activeEvent: null
    // es el evento activo
}


export const calendarReducer = ( state= initialState, action ) => {
    
    switch (action.type) {  

        case types.eventSetActive:
            return{
                ...state,
                activeEvent: action.payload
            }
        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        case types.eventClearActiveNote:
            return {
                ...state,
                activeEvent: null
            }

        case types.eventUpdated:
           return {
                ...state,
                events: state.events.map( e => (e.id === action.payload.id) ? action.payload : e   )
            }
            
        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter( event => (event.id !== state.activeEvent.id)),
                activeEvent: null
            }
        default:
            return state;
    }
}
