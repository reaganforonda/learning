import React from 'react';

export default function StudentList(props) {
    let students = props.classes.map((student, index) => {
        return (
            <div className='student' key={student.student_id}>
                <div>Student First Name: {student.first_name}</div>
                <div>Student Last Name: {student.last_name}</div>
            </div>
        )
    })

    return (
        <div className='studentlist'>
            {students}
        </div>
    )
}