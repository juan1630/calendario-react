import { types } from "../types/types";

const initialState = {
    checking: true,
    //uid:
    //name 
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }
        case types.authChekingFinish:
            return {
                ...state,
                checking: false
            }
        default:
            return state;
    }
}
