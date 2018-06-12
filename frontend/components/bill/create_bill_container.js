import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateBill from './create_bill';

const mapStateToProps = (state, ownProps) => {

  return ({

  })
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),

})

export default connect(mapStateToProps, mapDispatchToProps)(CreateBill);
