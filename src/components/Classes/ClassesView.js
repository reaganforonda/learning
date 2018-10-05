import React from 'react';
import {withRouter} from 'react-router-dom';

export class ClassesView extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='classesview'>
                Class View
            </div>
        )
    }
}

export default withRouter(ClassesView);