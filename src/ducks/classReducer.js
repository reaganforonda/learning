const INITIAL_STATE = {
    classes: ''
}

const LOAD_ALL_CLASSES = "LOAD_ALL_CLASSES";

export function loadUserClasses(classes) {
    return {
        type: LOAD_ALL_CLASSES,
        payload: classes
    }
}

export default function classReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case LOAD_ALL_CLASSES:
            return Object.assign({}, state, {classes: action.payload});

        default:
            return state
    }
}