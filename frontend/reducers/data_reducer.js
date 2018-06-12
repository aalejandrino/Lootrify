import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function dataReducer(state = {}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.data;
    default:
      return state;
  }
}
