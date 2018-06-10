export const searchUsers = (query) => (
  $.ajax({
    method: 'GET',
    url: `/api/search/users?query=${query}`
  })
);

export const searchUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);
