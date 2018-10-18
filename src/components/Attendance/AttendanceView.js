import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import {loadStudents} from '../../ducks/studentReducer';

export class AttendanceView extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    componentDidMount(){
        this.props.loadStudents(this.props.activeClass.class_id, this.props.user.user_id);
    }

    render(){
        return(
            <div className='attendance-view'>
                <Header headerTitle={'Attendance'}/>
                <div>
                    <div className='attendance-view-buttons'><button>Record Attendance</button><button>View Attendance</button></div>
                    <div>
                        <Switch>
                            
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        students: state.studentReducer.students,
        activeClass: state.classReducer.activeClass
    }
}

export default connect(mapStateToProps, {loadStudents})(withRouter(AttendanceView));
