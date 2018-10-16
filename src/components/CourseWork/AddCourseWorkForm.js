import React from 'react';

export default class AddCourseWorkForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    render(){
        return (
            <form className='add-course-work-form'>
                <div className='form-row'>
                    <input type='text' placeholder='Assignment Name' />
                </div>
            
            </form>
        )
    }
}