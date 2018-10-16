import React from 'react';
import axios from 'axios';

export default class AddStudentForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            firstName: '',
            lastName: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.verifyForm = this.verifyForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let student = {
            user_id: this.props.user.user_id,
            class_id: this.props.activeClass.class_id,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
        }

        if(this.verifyForm()){
            axios.post('/api/students', student).then(()=> {
                this.resetForm();
                this.props.getStudents(this.props.activeClass.class_id, this.props.user.user_id)
            }).catch((err)=> {
                console.log(err)
            })
        }
    }

    verifyForm(){
        return (this.state.firstName.length !== 0 && this.state.lastName.length !== 0);
    }

    resetForm(){
        this.setState({
            firstName: '',
            lastName: '',
        })
    }

    render(){
        return (
            <form className='add-student-form' onSubmit={(e)=>this.handleFormSubmit(e)}>
                <div className='studen-form-row'>
                    Class: {this.props.activeClass.class_name}
                </div>
                <div className='student-form-row'>
                    <input required={true} type='text' name='firstName' placeholder='Student First Name' onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div className='student-form-row'>
                    <input required={true} type='text' name='lastName' placeholder='Student Last Name' onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div className='student-form-row'>
                    <button type='button' onClick={()=>this.props.toggleDisplayForm()}>Cancel</button>
                    <button onClick={(e)=>this.handleFormSubmit(e)}>Add Student</button>
                </div>
            </form>
        )
    }
}