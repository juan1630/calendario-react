import React from 'react';
import PropTypes from 'prop-types'

import { Redirect, Route } from 'react-router'

export const PrivatesRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname);   

    return (
        <Route { ...rest } 
            component={ (props) => (
                ( isAuthenticated ) 
                
                ? ( <Component { ...props} />)
                : ( <Redirect  to="/auth/login" /> )
            )

            }
        />
    )
}


PrivatesRoutes.prototype = {
    isAuthenticated : PropTypes.bool.isRequired,
    component:  PropTypes.func.isRequired
}