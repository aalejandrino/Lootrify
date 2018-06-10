import * as FriendAPIUtil from '../util/friend_api_util';

export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveFriend = (friend) => ({
  type: RECEIVE_FRIEND,
  friend
})

const removeFriend = (id) => ({
  type: REMOVE_FRIEND,
  id
})

export const createFriendship = (id) => dispatch => (
  FriendAPIUtil.createFriendship(id)
    .then(friendRes => dispatch(receiveFriend(friendRes)))
);

export const removeFriendship = (id) => dispatch => (
  FriendAPIUtil.removeFriendship(id)
    .then(res => dispatch(removeFriend(res.id)))
);
