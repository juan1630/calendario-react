import Swal from 'sweetalert2';
import { fetchConToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';
import {types} from '../types/types'; 

// agregamos un evento al state

export const eventStartAddNew = (event) => {


   
   //recibismos el evento
   return async(dispatch, getState) => {
      // console.log(event)
      const { uid, name } = getState().auth;

      const resp = await fetchConToken('events/new', event, 'POST');
      const body =  await resp.json();

      console.log(body);
      
      if( body.ok ) {

         event.id = body.eventDB.id;
         event.user = {
            _id:uid,
            name
         }
         Swal.fire('Se guardo el evento','', 'success');
         dispatch( eventAddNew(event));
      }
   }
}


const eventAddNew = (event) => ({ 
    type: types.eventAddNew,
    payload: event
 });


//  setes un evento al state
 export const eventSetActive = (event) => ({ 
    type: types.eventSetActive,
    payload: event
 });


export const limpiarNotaActiva = () => ({  type: types.eventClearActiveNote  });


export const eventUpdated = (event) => ({
   type: types.eventUpdated,
   payload: event
});


export const eventDeleted = () => ({ type: types.eventDeleted});


export const eventsStartLoading = () => {


   return async (dispatch) => {

      try {
         
         const resp = await fetchConToken('events');
         const body = await resp.json();  


         if( body.ok ){

            const events = prepareEvents( body.events)
            console.log(events);
            dispatch(eventLoaded( events ));
         }
         
      } catch (error) {
         console.log(error);
      }
      
   }

}



const eventLoaded = (events) =>({
   type: types.eventLoaded,
   payload: events
});