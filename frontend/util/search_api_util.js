export const searchUsers = (query) => (
  $.ajax({
    method: 'GET',
    url: '/api/users/search',
    data: { query }
  })
);

export const searchUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);
