import * as SearchAPIUtil from '../util/search_api_util.js';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiverUsers = (friends) => ({
  type: RECEIVE_USERS,
  friends
});

const receiveUser = (friend) => ({
  type: RECEIVE_USER,
  friend
});

export const searchUsers = (query) => (
  SearchAPIUtil.searchUsers(query)
    .then(res => dispatch(receiveUsers(res))
));

export const searchUser = (id) => (
  SearchAPIUtil.searchUser(id)
    .then(res => dispatch(receiveUser(res))
));
