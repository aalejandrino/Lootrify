import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import searchReducer from './search_reducer';
import friendReducer from './friend_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  search: searchReducer,
  friends: friendReducer
})

export default entitiesReducer;
