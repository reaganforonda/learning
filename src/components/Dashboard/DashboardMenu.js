import React from 'react';
import {NavLink} from 'react-router-dom';

export default class DasbhoardMenu extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    render(){
        return (
            <nav className='dashboardmenu'>
                    <NavLink className='side-link' activeClassName='active-link' exact to={'/dashboard'}>Dashboard</NavLink>
                    <NavLink className='side-link' activeClassName='active-link'  to='/classes'>Classes</NavLink>
                    <NavLink className='side-link' activeClassName='active-link' to='/dashboard/attendance'>Attendance</NavLink>
                    <NavLink className='side-link' activeClassName='active-link'  to='/dashboard/grading'>Grading</NavLink>
                    <NavLink className='side-link' activeClassName='active-link'  to='/dashboard/students'>Students</NavLink>
            </nav>
        )
    }
}