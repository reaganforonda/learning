import axios from 'axios';

const INITIAL_STATE = {
    classes: [],
    loading: true
}

const LOAD_ALL_CLASSES = "LOAD_ALL_CLASSES";

export function loadUserClasses(user) {
    let classes = axios.get(`/api/classes?userID=${user.user_id}`).then((result) => {
        return result.data
    });

    return {
        type: LOAD_ALL_CLASSES,
        payload: classes
    }
}

export default function classReducer(state=INITIAL_STATE, action) {
    switch(action.type) {

        case LOAD_ALL_CLASSES + "_PENDING":
            return Object.assign({}, state, {loading: true});

        case LOAD_ALL_CLASSES + "_FULFILLED":
            return Object.assign({}, state, {classes: action.payload, loading: false});

        default:
            return state
    }
}