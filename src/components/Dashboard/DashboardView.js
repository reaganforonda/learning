import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import DasbhoardMenu from './DashboardMenu';


export class DashboardView extends React.Component{
    constructor(props) {
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className='dashboard-view'>
                
                <main>
                    <DasbhoardMenu/>
                    <div>
                        <Switch>
                            
                        </Switch>
                    </div>
                </main>
            </div>
        )
    }
}

export default withRouter(DashboardView);