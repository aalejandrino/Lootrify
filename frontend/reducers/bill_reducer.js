import { RECEIVE_BILLS, RECEIVE_BILL, RECEIVE_BILLMEMBERSHIP, REMOVE_BILL } from '../actions/bill_actions';
import merge from 'lodash/merge';



const billReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BILLS:
      return action.bills;

    case RECEIVE_BILL:
      return merge({}, state, {bills:{[action.bill.id]:action.bill}})
    // 
    // case RECEIVE_BILLMEMBERSHIP:
    //   return merge({}, state, {billmemberships:{[action.billmem.id]:action.billmem}})

    case REMOVE_BILL:
      let newState = merge({}, state)
      delete newState[action.id]
      return newState;

    default:
      return state;
  }
};

export default billReducer;
