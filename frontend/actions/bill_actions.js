import * as BillAPIUtil from '../util/bill_api_util';

export const RECEIVE_BILLS = 'RECEIVE_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const RECEIVE_BILLMEMBERSHIP = 'RECEIVE_BILLMEMBERSHIP'
export const REMOVE_BILL = 'REMOVE_BILL';

const receiveBills = bills => ({
  type: RECEIVE_BILLS,
  bills
})

const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill
})

const receiveBillmembership = billmem => ({
  type: RECEIVE_BILLMEMBERSHIP,
  billmem
})

const rmvBill = id => ({
  type: REMOVE_BILL,
  id
})

export const fetchBills = () => dispatch => (
  BillAPIUtil.fetchBills()
    .then(billsRes => dispatch(receiveBills(billsRes)))
)

export const fetchBill = (id) => dispatch => (
  BillAPIUtil.fetchbill(id)
    .then(billRes => dispatch(receiveBill(billRes)))
)

export const createBill = (bill, otherId) => dispatch => (
  BillAPIUtil.createBill(bill, otherId)
    .then(billRes => dispatch(receiveBill(billRes)))
)

export const createBillmembership = billmem => (
  BillAPIUtil.createBillmembership(billmem)
    .then(billmemRes => dispatch (receiveBillmembership(billmemRes)))
)

export const removeBill = (id) => dispatch => (
  BillAPIUtil.removeBill(id)
    .then(res => dispatch(rmvBill(res.id)))
)
