import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Dashboard from './dashboard';
import { fetchFriendships, removeFriendship } from '../../actions/friend_actions';
import { fetchBills, fetchBill, createBill } from '../../actions/bill_actions';
import { searchUser } from '../../actions/search_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.id,
  isOpen: Boolean(state.ui.modal),
  friends: Object.values(state.entities.friends),
  users: Object.values(state.entities.users),
  bills: state.entities.bills,
  billmemberships: state.entities.billmemberships
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  closeModal: () => dispatch(closeModal()),
  fetchFriendships: () => dispatch(fetchFriendships()),
  removeFriendship: (id, currentUserId, friendId) => dispatch(removeFriendship(id, currentUserId, friendId)),
  searchUser: (id) => dispatch(searchUser(id)),
  fetchBills: () => dispatch(fetchBills()),
  fetchBill: (id) => dispatch(fetchBill(id)),
  createBill: (bill) => dispatch(createBill(bill))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
