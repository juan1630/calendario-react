import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const NavBar = () => {

    const  dispatch = useDispatch();

    const handleLogout = () => {
        
        dispatch( startLogout());
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-5" >
            <span className="navbar-brand" >
                Pedro
            </span>

            <button 
                className="btn btn-outline-danger"
                onClick={handleLogout}
            >
            
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>

            </button>
        </div>
    )
}
