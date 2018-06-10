import * as SearchAPIUtil from '../util/search_api_util.js';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const searchUsers = (query) => (
  SearchAPIUtil.searchUsers(query)
    .then(res => dispatch(receiveUsers(res))
));

export const searchUser = (id) => (
  SearchAPIUtil.searchUser(id)
    .then(res => dispatch(receiveUser(res))
));
