import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { searchUsers } from '../../actions/search_actions';
import SearchForm from './search_form';

const mapStateToProps = (state, ownProps) => {

  return ({
    users: 'hi'//Object.values(state.entities.search.users)
  })
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  searchUsers: (query) => dispatch(searchUsers(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
