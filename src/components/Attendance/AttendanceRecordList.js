import React from 'react';
import {connect} from 'react-redux';

export class AttendanceRecordList extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            attendanceDate: ''
        }
    }

    render(){
        
        return (
            <div className='attendance-record-list'>
                <div>Record Attendance</div>
                <div><input type='date' placeholder='Select Date'/></div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,

    }
}

export default connect(mapStateToProps, {})(AttendanceRecordList);