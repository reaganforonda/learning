import React from 'react';
import Header from '../Header/Header';

export default class CourseWorkView extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='course-work-view'>
                <Header headerTitle={'Course Work'}/>
                <div>
                    Course Work View
                </div>
            </div>
        )
    }
}