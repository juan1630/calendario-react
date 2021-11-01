// el root reducer es la combinacion de todos los reducers 

import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { calendarReducer } from './calendarReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
    ui:uiReducer,
    calendar: calendarReducer,
    auth: authReducer
})

// ES COMO VA A LUCIR EL STORE

