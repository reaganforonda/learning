import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import DasbhoardMenu from './DashboardMenu';
import ClassesView from '../Classes/ClassesView';

export class DashboardView extends React.Component{
    constructor(props) {
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className='dashboard-view'>
                <DashboardHeader/>
                <main>
                    <DasbhoardMenu/>
                    <div>
                        <Switch>
                            <Route exact path='/dashboard/classes' component={ClassesView}/>
                        </Switch>
                    </div>
                </main>
            </div>
        )
    }
}

export default withRouter(DashboardView);