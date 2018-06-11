import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Dashboard from './dashboard';
import { fetchFriendships } from '../../actions/friend_actions';
import { searchUser } from '../../actions/search_actions';



const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.id,
  isOpen: Boolean(state.ui.modal),
  friends: Object.values(state.entities.friends),
  users: Object.values(state.entities.users)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchFriendships: () => dispatch(fetchFriendships()),
  searchUser: (id) => dispatch(searchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
