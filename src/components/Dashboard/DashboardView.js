import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import DasbhoardMenu from './DashboardMenu';
import AttendanceView from '../Attendance/AttendanceView';
import StudentsView from '../Students/StudentsView';
import CourseWorkView from '../CourseWork/CourseWorkView';

export class DashboardView extends React.Component{
    constructor(props) {
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className='dashboard-view'>
                    <DasbhoardMenu />
                <main>
                    
                    <div>
                        <Switch>
                            <Route path='/dashboard/attendance' component={AttendanceView}/>
                            <Route path='/dashboard/students' component={StudentsView}/>
                            <Route path='/dashboard/coursework' component={CourseWorkView}/>
                        </Switch>
                    </div>
                </main>
            </div>
        )
    }
}

export default withRouter(DashboardView);