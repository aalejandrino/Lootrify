// import { connect } from 'react-redux';
// import { openModal, closeModal } from '../../actions/modal_actions';
// // import DashboardFriendItem from './dashboard_friend_item';
// import { fetchFriendships } from '../../actions/friend_actions';
// import { fetchBills, createBill } from '../../actions/bill_actions';
// import { searchUser } from '../../actions/search_actions';
//
//
// const mapStateToProps = (state, ownProps) => ({
//   currentUserId: state.session.id,
//   isOpen: Boolean(state.ui.modal),
//   friends: Object.values(state.entities.friends),
//   users: Object.values(state.entities.users),
//   bills: state.entities.bills
// });
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   openModal: (modal) => dispatch(openModal(modal)),
//   closeModal: () => dispatch(closeModal()),
//   fetchFriendships: () => dispatch(fetchFriendships()),
//   searchUser: (id) => dispatch(searchUser(id)),
//   fetchBills: () => dispatch(fetchBills()),
//   createBill: (bill) => dispatch(createBill(bill))
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)();
