import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FRIENDS } from '../actions/friend_actions';
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

    default:
      return state;

  }
};

export default usersReducer;
