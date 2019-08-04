import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import jobsReducer from "./jobs-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    jobsSection: jobsReducer,
    AppSection: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;