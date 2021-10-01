// el root reducer es la combinacion de todos los reducers 

import { combineReducers } from 'redux'
import { calendarReducer } from './calendarReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
    ui:uiReducer,
    calendar: calendarReducer
    //TODO: EL AUTH REDUCER FALTA
})

// ES COMO VA A LUCIR EL STORE

