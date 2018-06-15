import { LOGOUT_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';
import { RECEIVE_BILL_ERRORS } from '../actions/bill_actions';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import merge from 'lodash/merge';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_BILL_ERRORS:
      return action.errors;

    case LOGOUT_CURRENT_USER:
      return [];

    case OPEN_MODAL:
      return [];

    case CLOSE_MODAL:
      return [];

    default:
      return state;

  }
};

export default sessionErrorsReducer;
