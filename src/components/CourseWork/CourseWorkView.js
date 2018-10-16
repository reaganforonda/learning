import React from 'react';
import Header from '../Header/Header';
import AddCourseWorkForm from './AddCourseWorkForm';
import {connect} from 'react-redux';


export class CourseWorkView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            displayForm: false
        }
    }

    toggleDisplayForm(){
        if(this.state.displayForm) {
            this.setState({displayForm: false});
        } else {
            this.setState({displayForm: true});
        }
    }

    render(){
        return (
            <div className='course-work-view'>
                <Header headerTitle={'Course Work'}/>
                <div>
                    <div><button onClick={()=>this.toggleDisplayForm()}>Add Course Work</button></div>
                    {
                        this.state.displayForm ? <div className='form-modal'><AddCourseWorkForm/> </div>: null
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        activeClass: state.classReducer.activeClass
    }
}

export default connect(mapStateToProps, {})(CourseWorkView);