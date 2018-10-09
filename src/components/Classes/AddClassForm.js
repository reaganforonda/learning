import React from 'react';

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
    }

    render(){
        return (
            <form className='add-class-form'>
                <input placeholder='Class Name'/>
                <input placeholder='Class Code'/>
                <input placeholder='School Name'/>
                <input placeholder='School Year'/>
                <input placeholder='Class Start Date'/>
                <input placeholder='Class End Date'/>
                <button>Create Class</button>
            </form>
        )
    }
}