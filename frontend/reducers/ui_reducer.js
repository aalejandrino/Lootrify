
import { combineReducers } from 'redux';

import modal from './modal_reducer';
import data from './data_reducer';

export default combineReducers({
  modal,
  data
});
