import { RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const friendReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};

    case RECEIVE_FRIENDS:
      return action.payload.friendships;

    case RECEIVE_FRIEND:
      return merge({}, state, {[action.friend.id]:action.friend});

    case REMOVE_FRIEND:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;

    default:
      return state;

  }
};

export default friendReducer;
