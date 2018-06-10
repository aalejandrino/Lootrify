export const createFriendship = id => (
  $.ajax({
    method: 'POST',
    url: 'api/friends',
    id
  })
)

export const removeFriendship = id => (
  $.ajax({
    method: DELETE,
    url: `api/friends/${id}`
  })
)
