import React from 'react';
import axios from 'axios';

export default class AddClassForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            className:'',
            classCode:'',
            schoolName:'',
            schoolYear:'',
            classStartDate: '',
            classEndDate: ''
        }

        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    submitForm(e){
        e.preventDefault();

        let newClass = {
            className: this.state.className,
            classCode: this.state.classCode,
            schoolName: this.state.schoolName,
            schoolYear: this.state.schoolYear,
            classStartDate: this.state.classStartDate,
            classEndDate: this.state.classEndDate
        };

        axios.post(`/api/classes?userID=${this.props.user.user_id}`, newClass).then((result) => {
            this.props.reloadClasses(this.props.user);
            this.props.toggleClassFormModal()
        }).catch((err) => {
            console.log(err);
        })
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    render(){
        return (
            <form className='add-class-form'>
                <input type='text' name='className' placeholder='Class Name' onChange={(e)=>this.handleInputChange(e)}/>
                <input type='text' name='classCode' placeholder='Class Code' onChange={(e)=>this.handleInputChange(e)}/>
                <input type='text' name='schoolName' placeholder='School Name' onChange={(e)=>this.handleInputChange(e)}/>
                <input type='text' name='schoolYear' placeholder='School Year' onChange={(e)=>this.handleInputChange(e)}/>
                <input type='date' name='classStartDate' placeholder='Class Start Date' onChange={(e)=>this.handleInputChange(e)}/>
                <input type='date' name='classEndDate' placeholder='Class End Date' onChange={(e)=>this.handleInputChange(e)}/>
                <button onClick={()=>this.props.toggleClassFormModa}>Cancel</button>
                <button onClick={(e)=> this.submitForm(e)}>Create Class</button>
            </form>
        )
    }
}