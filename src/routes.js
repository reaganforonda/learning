import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingView from './components/Landing/LandingView';
import RegisterView from './components/Register/RegisterView';
import LoginView from './components/Login/LoginView';
import DashboardView from './components/Dashboard/DashboardView';

export default (
    <Switch>
        <Route exact path='/' component={LandingView}/>
        <Route path='/register' component={RegisterView}/>
        <Route path='/login' component={LoginView}/>
        <Route path='/dashboard' component={DashboardView}/>
    </Switch>
)