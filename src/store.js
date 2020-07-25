import { createStore, combineReducers ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import usersReducer from './reducers/usersReducer';
import taskReducer from './reducers/taskReducer';

const store = createStore(
    combineReducers({
        usersReducer,
        taskReducer
    }
    ),{},applyMiddleware(thunk)
)
export default store;