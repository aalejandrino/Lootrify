import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { searchUsers, searchUser } from '../../actions/search_actions';
import SearchForm from './search_form';

const mapStateToProps = (state, ownProps) => {

  return ({
    isOpen: Boolean(state.ui.modal),
    users: Object.values(state.entities.search)
  })
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  searchUsers: (query) => dispatch(searchUsers(query)),
  searchUser: (id) => dispatch(searchUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
