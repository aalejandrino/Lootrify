import { RECEIVE_BILLS, RECEIVE_BILL, RECEIVE_BILLMEMBERSHIP, REMOVE_BILL } from '../actions/bill_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const billReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};

    case RECEIVE_BILLS:
      return action.payload.bills;

    case RECEIVE_BILL:
      return merge({}, state, {[action.payload.bill.id]:action.payload.bill});

    case REMOVE_BILL:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default billReducer;
