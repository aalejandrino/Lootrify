import { RECEIVE_BILLS, RECEIVE_BILL, REMOVE_BILL } from '../actions/bill_actions';
import merge from 'lodash/merge';

const billReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BILLS:
      return action.bills;

    case RECEIVE_BILL:
      return merge({}, state, {[action.bill.id]:action.bill})

    case REMOVE_BILL:
      let newState = merge({}, state)
      delete newState[action.id]
      return newState;

    default:
      return state;
  }
};

export default billReducer;
