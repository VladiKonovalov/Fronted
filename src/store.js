import { createStore, combineReducers ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import sitesReducer from './reducers/sitesReducer';
import usersReducer from './reducers/usersReducer';
import taskReducer from './reducers/taskReducer';

const store = createStore(
    combineReducers({
        sitesReducer,
        usersReducer,
        taskReducer
    }
    ),{},applyMiddleware(thunk)
)
export default store;