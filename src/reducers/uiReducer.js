import {  types } from '../types/types';


const initialState = {
    modalOpen: false,
}
// recibimso el state y el action
export const uiReducer  = ( state = initialState, action ) => {
   
    switch (action.type) {

        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }
    
        default:
            return state;
    }
}