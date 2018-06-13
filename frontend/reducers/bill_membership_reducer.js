import { RECEIVE_BILLS, RECEIVE_BILLMEMBERSHIP } from '../actions/bill_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const billmembershipReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};

    case RECEIVE_BILLS:
      return action.payload.billmemberships;

    case RECEIVE_BILLMEMBERSHIP:
      return merge({}, state, {billmemberships:{[action.billmem.id]:action.billmem}});

    default:
      return state;
  }
};

export default billmembershipReducer;
