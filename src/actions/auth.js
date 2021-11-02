import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from '../types/types'

import Swal from "sweetalert2";

export const startLogin = ( email, password ) => {

    // ejecutamos la funcion
    return async( dispatch) => {
        const resp = await fetchSinToken( 'auth', { email, password}, 'POST' );
        const body = await resp.json();
        // si la respuesta es true grabamos todo el el localStorage
        if(body.ok) {
            localStorage.setItem('token', body.token);
            // fecha de inicio del token
            localStorage.setItem('token-init-date', new Date().getTime());
            // dispatch del login
            dispatch( login({
                uid: body.uid,
                name:body.name
            }));
        
        }else {
            Swal.fire('Error', body.msg, 'error')
        }

    }
};


export const startRegister = (email, password, name ) => {
   
    return async (dispatch) => {

        const resp = await fetchSinToken('auth/new', {email, password, name}, 'POST');
        const body = await resp.json();
        
        if(body.ok) {
            
            dispatch(login({
                uid: body.uid,
                name:body.name
            }))
        }else {
            Swal.fire('Error', 'No se pudo crear el usuario', 'error');
        }

    }
}


export const startChecking = () => {
    
    return async (dispatch) => {

        const resp = await fetchConToken('auth/renew', {});
        const body = await resp.json();

        if(body.ok){
           
            dispatch( login({
                uid: body.uid,
                name: body.name
            }));
        
        }else{

            dispatch( checkingFinish());
        }

    }
}

const checkingFinish = () => ({ type: types.authChekingFinish });

//hacemos la accion del ltype
const login = (user) => ({
    type: types.authLogin,
    payload: user
}) ;