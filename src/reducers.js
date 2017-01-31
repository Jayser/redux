import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './features/users/reducer'

const rootReducer = combineReducers({
    users,
    routing: routerReducer
});

export default rootReducer;
