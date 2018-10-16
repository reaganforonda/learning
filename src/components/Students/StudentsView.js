import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import AddStudentForm from './AddStudentForm';
import {loadStudents} from '../../ducks/studentReducer';
import StudentList from './StudentList';

export class StudentsView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            displayForm: false
        }

        this.toggleDisplayForm = this.toggleDisplayForm.bind(this);
    }

    componentDidMount(){
        this.props.loadStudents(this.props.activeClass.class_id, this.props.user.user_id);
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
                    {
                        this.props.loading ? <div>Loading</div> : <StudentList students={this.props.students}/>
                    }
                    
                </div>
                {
                    this.state.displayForm ? <div className='student-form-modal'>
                        <AddStudentForm getStudents={this.props.loadStudents} toggleDisplayForm={this.toggleDisplayForm} user={this.props.user} activeClass={this.props.activeClass}/>
                    </div> : null
                }
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        activeClass: state.classReducer.activeClass,
        students: state.studentReducer.students,
        loading: state.studentReducer.loading
    }
}

export default connect(mapStateToProps, {loadStudents})(withRouter(StudentsView));