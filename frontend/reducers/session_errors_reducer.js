import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  LOGOUT_CURRENT_USER,
  CLEAR_ERRORS
} from '../actions/session_actions';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import merge from 'lodash/merge';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_SESSION_ERRORS:
      return action.errors;

    case RECEIVE_CURRENT_USER:
      return [];

    case OPEN_MODAL:
      return [];

    case CLOSE_MODAL:
      return [];

    case CLEAR_ERRORS:
      return [];

    case LOGOUT_CURRENT_USER:
      return [];

    default:
      return state;

  }
};

export default sessionErrorsReducer;
