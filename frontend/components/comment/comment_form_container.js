import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import Comments from './comment_form';

const mapStateToProps = (state, ownProps) => {

  return ({
    targetBill: state.ui.data //passed data from modal actions

  });
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  closeModal: () => dispatch(closeModal()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
