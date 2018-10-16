import axios from 'axios';

const INITIAL_STATE = {
    students: [],
    loading: true,
    activeStudent: ''
}

const LOAD_ALL_STUDENTS = 'LOAD_ALL_STUDENTS';

export function loadStudents(classID, userID) {
    let students = axios.get(`/api/students/${userID}?classID=${classID}`).then((result) => {
        return result.data
    })

    return {
        type: LOAD_ALL_STUDENTS,
        payload: students
    }
}

export default function studentReducer(state=INITIAL_STATE, action) {
    switch(action.type){
        case LOAD_ALL_STUDENTS + '_PENDING':
            return Object.assign({}, state, {loading: true});
        case LOAD_ALL_STUDENTS + '_FULFILLED':
            return Object.assign({}, state, {loading: false, students: action.payload});

        default:
            return state;
    }
}
