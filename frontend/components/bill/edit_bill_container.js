import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { updateBill, createBillmembership, fetchBills } from '../../actions/bill_actions';
import EditBill from './edit_bill';

const mapStateToProps = (state, ownProps) => {

  return ({
    targetBill: state.ui.data.bill, //passed data from modal actions
    targetUser: state.ui.data.user

  });
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  closeModal: () => dispatch(closeModal()),
  updateBill: (bill, id) => dispatch(updateBill(bill, id)),
  createBillmembership: (billmem) => dispatch(createBillmembership(billmem)),
  fetchBills: () => dispatch(fetchBills())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditBill);
