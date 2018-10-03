import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingView from './components/Landing/LandingView';
import RegisterView from './components/Register/RegisterView';

export default (
    <Switch>
        <Route exact path='/' component={LandingView}/>
        <Route pather='/register' component={RegisterView}/>
    </Switch>
)