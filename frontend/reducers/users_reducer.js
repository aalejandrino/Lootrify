import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FRIENDS, REMOVE_FRIEND } from '../actions/friend_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case LOGOUT_CURRENT_USER:
      return {};

    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user});

    case RECEIVE_FRIENDS:
      return merge({}, state, action.payload.users)

    case REMOVE_FRIEND:
      let newState = merge({}, state);
      if (action.currentUserId !== action.friendId) {
        delete newState[action.friendId];
      }
      return newState;

    default:
      return state;

  }
};

export default usersReducer;
