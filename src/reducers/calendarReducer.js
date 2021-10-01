import moment from "moment";
import { types } from "../types/types";

// agregar al state esta propiedad y la hace disponible para  todos 
const initialState = {
    // los eventos que tiene le calendario
    events: [{
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
        default:
            return state;
    }
}
