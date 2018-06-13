export const fetchComments = (billId) => (
  $.ajax({
    method: 'GET',
    url: `/api/bills/${billId}/comments`
  })
)

export const createComment = (billId, comment) => (
  $.ajax({
    method: 'POST',
    url: `/api/bills/${billId}/comments`,
    data: { comment }
  })
)

export const removeComment = (billId, id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bills/${billId}/comments/${id}`
  })
)
