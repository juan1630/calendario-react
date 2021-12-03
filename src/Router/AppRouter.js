import React, { useEffect } from 'react';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/Calendar';

import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { startChecking } from '../actions/auth';
import PublicRoutes from './PublicRoute';
import { PrivatesRoutes } from './PrivatesRoutes';



export const AppRouter = () => {

    const { checking, uid } = useSelector( state => state.auth );
    
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch( startChecking());
   }, [dispatch]);

   if( checking ) {
        return (<h3> Espere... </h3>);
   }    

    return (

            <Router>
                <div>
                    <Switch>
                        <PublicRoutes
                            exact 
                            path="/login" 
                            isAuthenticated={!!uid }
                            component={LoginScreen }
                            />

                        <PrivatesRoutes 
                            exact 
                            path="/" 
                            component={ CalendarScreen }
                            isAuthenticated={!!uid}
                            />

                        <Redirect to="/" />
                    </Switch>
                </div>
        </Router>
    )
}
