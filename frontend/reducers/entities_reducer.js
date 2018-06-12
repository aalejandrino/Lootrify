import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import searchReducer from './search_reducer';
import friendReducer from './friend_reducer';
import billReducer from './bill_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  search: searchReducer,
  friends: friendReducer,
  bills: billReducer
})

export default entitiesReducer;
