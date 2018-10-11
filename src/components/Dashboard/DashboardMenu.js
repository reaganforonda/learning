import React from 'react';
import {NavLink} from 'react-router-dom';

export default class DasbhoardMenu extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='dashboardmenu'>
                <nav className='nav-menu'>
                    <NavLink className='side-link' activeClassName='active-link' exact to='/dashboard/classes'>Classes</NavLink>
                    <NavLink className='side-link' activeClassName='active-link' exact to='/dashboard/attendance'>Attendance</NavLink>
                    <NavLink className='side-link' activeClassName='active-link' exact to='/dashboard/grading'>Grading</NavLink>
                    <NavLink className='side-link' activeClassName='active-link' exact to='/dashboard/students'>Students</NavLink>
                </nav>
            </div>
        )
    }
}