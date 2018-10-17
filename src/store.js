import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import classReducer from './ducks/classReducer';
import userReducer from './ducks/userReducer';
import studentReducer from './ducks/studentReducer';
import attendanceReducer from './ducks/attendanceReducer';

const reducers = {
    classReducer: classReducer,
    userReducer: userReducer,
    studentReducer: studentReducer,
    attendanceReducer: attendanceReducer
}

let middleware = promiseMiddleware();

export default createStore(combineReducers(reducers), applyMiddleware(middleware));