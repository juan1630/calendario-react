import React from 'react';

import { LoginScreen } from '../components/auth/LoginScreen'
import { Calendar } from '../components/calendar/Calendar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


export const AppRouter = () => {
    return (

            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={LoginScreen } />
                        <Route exact path="/" component={ Calendar } />
                        <Redirect to="/" />
                    </Switch>
                </div>
        </Router>
    )
}
