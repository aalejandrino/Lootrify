 import {
   RECEIVE_USERS,
   RECEIVE_USER
 } from '../actions/search_actions';

 import merge from 'lodash/merge';

 const searchReducer = (state = {}, action) => {
   Object.freeze(state);

   switch (action.type) {
     case RECEIVE_USERS:
        return action.users;

     case RECEIVE_USER:
        return merge({}, state, {[action.user.id]:action.user});

     default:
        return state;
   }

 }

export default searchReducer;
