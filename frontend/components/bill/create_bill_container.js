import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateBill from './create_bill';

const mapStateToProps = (state, ownProps) => {

  return ({
    user: state.ui.data, //passed data from modal actions
    currentUserId: state.session.id
  })
}

const mapDispatchToProps = dispatch => ({
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  closeModal: () => dispatch(closeModal()),

})

export default connect(mapStateToProps, mapDispatchToProps)(CreateBill);
