export const fetchBills = () => (
  $.ajax({
    method: 'GET',
    url: '/api/bills'
  })
)

export const fetchBill = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/bills/${id}`
  })
)

export const createBill = (bill) => (
  $.ajax({
    method: 'POST',
    url: '/api/bills',
    data: { bill }
  })
)

export const removeBill = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bills/${id}`
  })
)
