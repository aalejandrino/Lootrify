import * as FriendAPIUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
})

const receiveFriend = (friend) => ({
  type: RECEIVE_FRIEND,
  friend
})

const removeFriend = (id) => ({
  type: REMOVE_FRIEND,
  id
})

export const createFriendship = (friend) => dispatch => (
  FriendAPIUtil.createFriendship(friend)
    .then(friendRes => dispatch(receiveFriend(friendRes)))
);

export const removeFriendship = (id) => dispatch => (
  FriendAPIUtil.removeFriendship(id)
    .then(res => dispatch(removeFriend(res.id)))
);

export const fetchFriendships = () => dispatch => (
  FriendAPIUtil.fetchFriendships()
    .then(friendsRes => dispatch(receiveFriends(friendsRes)))
)
