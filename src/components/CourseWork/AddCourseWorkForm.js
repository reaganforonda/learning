import React from 'react';

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
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        return (
            <form className='add-course-work-form'>
                <div className='form-row'>
                    <input type='text' name='category' placeholder='Assignment Category' />
                </div>
                <div className='form-row'>
                    <input type='text' name='assignmentName' placeholder='Assignment Name' />
                </div>
                <div className='form-row'>
                    <input type='text' name='assignmentDescription' placeholder='Assignment Description' />
                </div>
                <div className='form-row'>
                    <input type='datetime' name='dueDate' placeholder='Due Date'/>
                </div>
                <div className='form-row'>
                    <input type='number' name='totalPoints' placeholder='Total Points' />
                </div>
                <div className='form-row'>
                    <input type='number' name='weight' placeholder='Weight'/>
                </div>
                <div className='form-row'>
                    <button>Add Assignment</button>
                </div>
            </form>
        )
    }
}