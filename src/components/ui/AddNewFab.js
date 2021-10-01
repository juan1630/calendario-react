import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const openFabModal = () => {
        dispatch( uiOpenModal());
    }

    return (
        <div>
            <button 
                onClick={ openFabModal }  
                className="btn btn-primary fab"
                >

                <i className="fa fa-plus"></i>
            </button>
        </div>
    )
}
