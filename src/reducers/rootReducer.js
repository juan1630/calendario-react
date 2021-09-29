// el root reducer es la combinacion de todos los reducers 

import { combineReducers } from 'redux'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
    ui:uiReducer

    //TODO: EL AUTH REDUCER FALTA
    // TODO: CALENDAR REDUCER FALTA
})

// ES COMO VA A LUCIR EL STORE

