import axios from 'axios';

const INITIAL_STATE = {
    classes: [],
    loading: true,
    activeClasse: ''
}

const LOAD_ALL_CLASSES = "LOAD_ALL_CLASSES";
const SET_ACTIVE_CLASS = 'SET_ACTIVE_CLASS';

export function loadUserClasses(user) {
    let classes = axios.get(`/api/classes?userID=${user.user_id}`).then((result) => {
        return result.data
    });

    return {
        type: LOAD_ALL_CLASSES,
        payload: classes
    }
}

export function setActiveClass(classroom) {
    return {
        type: SET_ACTIVE_CLASS,
        payload: classroom
    }
}

export default function classReducer(state=INITIAL_STATE, action) {
    switch(action.type) {

        case LOAD_ALL_CLASSES + "_PENDING":
            return Object.assign({}, state, {loading: true});

        case LOAD_ALL_CLASSES + "_FULFILLED":
            return Object.assign({}, state, {classes: action.payload, loading: false});

        case SET_ACTIVE_CLASS:
            return Object.assign({}, state, {activeClasse: action.payload});

        default:
            return state
    }
}