import React from 'react';

export default function ClassesList(props) {
    let classes = props.classes.map((value, index)=> {
        return (
            <div className='teacher-class' key={value.classe_id} onClick={(e)=>props.setActiveClass(e, value)}>
                <div>{value.class_name}</div>
                <div>{value.class_code}</div>
                <div>{value.school_name }</div>
            </div>
        )
    })

    return(
        <div className='classes-list'>
            {classes}
        </div>
    )
}