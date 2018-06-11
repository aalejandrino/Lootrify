import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { searchUsers, searchUser } from '../../actions/search_actions';
import { createFriendship } from '../../actions/friend_actions';
import SearchForm from './search_form';

const mapStateToProps = (state, ownProps) => {

  return ({
    currentUserId: state.session.id,
    isOpen: Boolean(state.ui.modal),
    users: Object.values(state.entities.search),
    friends: state.entities.friends
  })
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  searchUsers: (query) => dispatch(searchUsers(query)),
  searchUser: (id) => dispatch(searchUser(id)),
  createFriendship: (friend) => dispatch(createFriendship(friend))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
