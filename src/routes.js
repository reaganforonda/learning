import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingView from './components/Landing/LandingView';


export default (
    <Switch>
        <Route exact path='/' component={LandingView}/>
    </Switch>
)