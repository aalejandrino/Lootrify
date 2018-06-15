import * as BillAPIUtil from '../util/bill_api_util';

export const RECEIVE_BILLS = 'RECEIVE_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const RECEIVE_BILLMEMBERSHIP = 'RECEIVE_BILLMEMBERSHIP';
export const REMOVE_BILL = 'REMOVE_BILL';
export const RECEIVE_BILL_ERRORS = 'RECEIVE_BILL_ERRORS';

const receiveBills = payload => ({
  type: RECEIVE_BILLS,
  payload
});

const receiveBill = payload => ({
  type: RECEIVE_BILL,
  payload
});

const receiveBillmembership = billmem => ({
  type: RECEIVE_BILLMEMBERSHIP,
  billmem
});

const rmvBill = (id, billmemId, billmemId2) => ({
  type: REMOVE_BILL,
  id,
  billmemId,
  billmemId2
});

const receiveErrors = (errors) => ({
  type: RECEIVE_BILL_ERRORS,
  errors
});

export const fetchBills = () => dispatch => (
  BillAPIUtil.fetchBills()
    .then(payload => dispatch(receiveBills(payload)))
);

export const fetchBill = (id) => dispatch => (
  BillAPIUtil.fetchBill(id)
    .then(billRes => dispatch(receiveBill(billRes)))
);

export const createBill = (bill, otherId) => dispatch => (
  BillAPIUtil.createBill(bill, otherId)
    .then(billRes => dispatch(receiveBill(billRes)),
            (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const createBillmembership = billmem => dispatch => (
  BillAPIUtil.createBillmembership(billmem)
    .then(billmemRes => dispatch(receiveBillmembership(billmemRes)))
);

export const removeBill = (id, billmemId, billmemId2) => dispatch => (
  BillAPIUtil.removeBill(id)
    .then(res => dispatch(rmvBill(id, billmemId, billmemId2)))
);

export const updateBill = (bill, id) => dispatch => (
  BillAPIUtil.updateBill(bill, id)
    .then(payload => dispatch(receiveBill(payload)),
            (errors) => dispatch(receiveErrors(errors.responseJSON)))
);
