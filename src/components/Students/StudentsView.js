import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import AddStudentForm from './AddStudentForm';

export class StudentsView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            displayForm: false
        }

        this.toggleDisplayForm = this.toggleDisplayForm.bind(this);
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
            <div className='students-view'>
                <Header headerTitle={'Students'}/>
                <div className='students-main-section'>
                    <div><button type='button' onClick={()=>this.toggleDisplayForm()}>Add Student</button></div>
                    Student view
                </div>
                {
                    this.state.displayForm ? <div className='student-form-modal'>
                        <AddStudentForm user={this.props.user} activeClass={this.props.activeClass}/>
                    </div> : null
                }
                
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

export default connect(mapStateToProps, {})(withRouter(StudentsView));