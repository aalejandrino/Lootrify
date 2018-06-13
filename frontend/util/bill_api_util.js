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

export const createBill = (bill, otherId) => (
  $.ajax({
    method: 'POST',
    url: '/api/bills',
    data: { bill, otherId: otherId }
  })
)

export const createBillmembership = (billmem) => (
  $.ajax({
    method: 'POST',
    url: '/api/billmemberships',
    data: { billmem }
  })
)

export const removeBill = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bills/${id}`
  })
)
