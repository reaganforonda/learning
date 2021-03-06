import React from 'react';

export default function ClassesList(props) {
    let classes = props.classes.map((value, index)=> {
        return (
            <div className='teacher-class' key={value.class_id} onClick={(e)=>props.handleClassSelection(e, value)}>
                <div>CLASS NAME: {value.class_name}</div>
                <div>CLASS CODE: {value.class_code}</div>
                <div>SCHOOL NAME: {value.school_name }</div>
            </div>
        )
    })

    return(
        <div className='classes-list'>
            {classes}
        </div>
    )
}