import {types} from '../types/types'; 

// agregamos un evento al state
export const eventAddNew = (event) => ({ 
    type: types.eventAddNew,
    payload: event
 });


//  setes un evento al state
 export const eventSetActive = (event) => ({ 
    type: types.eventSetActive,
    payload: event
 });


export const limpiarNotaActiva = () => ({  type: types.eventClearActiveNote  });