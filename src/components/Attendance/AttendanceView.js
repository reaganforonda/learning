import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header/Header';

export class AttendanceView extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    render(){
        return(
            <div className='attendance-view'>
                <Header headerTitle={'Attendance'}/>
                <main>
                    
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(AttendanceView));
