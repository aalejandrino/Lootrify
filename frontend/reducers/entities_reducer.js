import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  search: searchReducer
})

export default entitiesReducer;
