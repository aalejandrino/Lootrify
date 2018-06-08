import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginSessionForm from './login_session_form';

const mapStateToProps = (state, ownProps) => ({
  user: {user_name: '', password: ''},
  errors: state.errors.session,
  formType: 'Log In'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);
