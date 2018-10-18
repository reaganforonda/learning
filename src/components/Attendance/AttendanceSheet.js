import React from 'react';


export default function AttendanceSheet(props) {
    let attendanceSheet = props.students.map((student) => {
        return (
            <div className='student-attendance' key={student.student_id}>
                <div>{student.first_name} {student.last_name}</div>
                <div>
                    <button>Present</button>
                    <button>Tardy</button>
                    <button>Absent</button>
                    <button>Excused</button>
                </div>
            </div>
        )
    })


    return (
        <div className='attendance-sheet'>
            {attendanceSheet}
        </div>
    )
}