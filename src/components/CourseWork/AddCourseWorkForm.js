import React from 'react';
import axios from 'axios';

export default class AddCourseWorkForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            category: '',
            assignmentName : '',
            assignmentDescription: '',
            dueDate: '',
            totalPoints: '',
            weight: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let courseWork = {
            class_id: this.props.classID,
            course_work_name : this.state.assignmentName,
            course_work_description: this.state.assignmentDescription,
            due_date: this.state.dueDate,
            total_points: this.state.totalPoints,
            weight: this.state.weight,
            category: this.state.category
        }

        axios.post('/api/coursework', courseWork).then(()=> {
            this.resetForm();
        }).catch((err) => {
            console.log(err);
        })
    }

    resetForm(){
        this.setState({
            category: '',
            assignmentName : '',
            assignmentDescription: '',
            dueDate: '',
            totalPoints: '',
            weight: ''
        })
    }

    render(){
        return (
            <form className='add-course-work-form' onSubmit={(e)=> this.handleSubmit(e)}>
                <div className='form-row'>
                    <input required={true} type='text' name='category' placeholder='Assignment Category' onChange={(e)=>this.handleInputChange(e)} value={this.state.category}/>
                </div>
                <div className='form-row'>
                    <input required={true} type='text' name='assignmentName' placeholder='Assignment Name' onChange={(e)=>this.handleInputChange(e)} value={this.state.assignmentName}/>
                </div>
                <div className='form-row'>
                    <input required={true} type='text' name='assignmentDescription' placeholder='Assignment Description' onChange={(e)=>this.handleInputChange(e)} value={this.state.assignmentDescription}/>
                </div>
                <div className='form-row'>
                    <input required={true} type='datetime-local' name='dueDate' placeholder='Due Date' onChange={(e)=>this.handleInputChange(e)} value={this.state.dueDate}/>
                </div>
                <div className='form-row'>
                    <input required={true} type='number' name='totalPoints' placeholder='Total Points' onChange={(e)=>this.handleInputChange(e)} value={this.state.totalPoints}/>
                </div>
                <div className='form-row'>
                    <input required={true} type='number' name='weight' placeholder='Weight' onChange={(e)=>this.handleInputChange(e)} value={this.state.weight}/>
                </div>
                <div className='form-row'>
                    <button type='button' onClick={()=>this.props.toggleDisplayForm()}>Cancel</button>
                    <button onClick={(e)=>this.handleSubmit(e)}>Add Assignment</button>
                </div>
            </form>
        )
    }
}