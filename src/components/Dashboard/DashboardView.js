import React from 'react';
import {withRouter} from 'react-router-dom';

export class DashboardView extends React.Component{
    constructor(props) {
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className='dashboard-view'>
            
            </div>
        )
    }
}

export default withRouter(DashboardView);