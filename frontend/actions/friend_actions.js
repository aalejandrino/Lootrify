import * as FriendAPIUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveFriends = (payload) => ({
  type: RECEIVE_FRIENDS,
  payload
})

const receiveFriend = (friend) => ({
  type: RECEIVE_FRIEND,
  friend
})

const removeFriend = (id, currentUserId, friendId) => ({
  type: REMOVE_FRIEND,
  id,
  currentUserId,
  friendId
})

export const createFriendship = (friend) => dispatch => (
  FriendAPIUtil.createFriendship(friend)
    .then(friendRes => dispatch(receiveFriend(friendRes)))
);

export const removeFriendship = (id, currentUserId, friendId) => dispatch => {
  // debugger
  return (
    FriendAPIUtil.removeFriendship(id)
      .then(res => dispatch(removeFriend(id, currentUserId, friendId)))
  );
}

export const fetchFriendships = () => dispatch => (
  FriendAPIUtil.fetchFriendships()
    .then(payload => dispatch(receiveFriends(payload)))
)

export const fetchFriend = (id) => dispatch => (
  FriendAPIUtil.fetchFriend(id)
    .then(userRes => dispatch(receiveUser(userRes)))
)
