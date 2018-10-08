import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import classReducer from './ducks/classReducer';
import userReducer from './ducks/userReducer';

const reducers = {
    classReducer: classReducer,
    userReducer: userReducer
}

let middleware = promiseMiddleware();

export default createStore(combineReducers(reducers), applyMiddleware(middleware));