export const createFriendship = friend => (
  $.ajax({
    method: 'POST',
    url: 'api/friends',
    data: { friend }
  })
)

export const removeFriendship = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/friends/${id}`
  })
)

export const fetchFriendships = () => (
  $.ajax({
    method: 'GET',
    url: 'api/friends'
  })
)

export const fetchFriend = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/user/${id}`
  })
)
