import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import DashboardPrivate from './dashboard_private';



const mapStateToProps = (state, ownProps) => {
  // var total;
  // let users = Object.values(state.entities.users);
  // let bills = state.entities.bills;
  // let billmemberships = Object.values(state.entities.billmemberships);
  // let currentUserId: state.session.id;
  //
  //
  // let total = totalYouOwe(users, bills, billmemberships, currentUserId);
  // debugger

  return (
    {
      currentUserId: state.session.id,
      billmemberships: Object.values(state.entities.billmemberships),
      bills: state.entities.bills,
      users: Object.values(state.entities.users),
      // total_you_owe: total
    }
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  closeModal: () => dispatch(closeModal()),

});
//
// const totalYouOwe = (users, bills, billmemberships, currentUserId) => {
//   // var total = 0;
//
//   users.forEach((user) => {
//     var total = total || 0;
//     let you_owe = 0;
//
//     let billmems = (billmemberships
//                       .filter(billmem => (billmem.member_id === currentUserId)));
//
//     let bills2 = (billmems.map(billmem => bills[billmem.bill_id]));
//
//     bills2.forEach((bill) => {
//       if (bill.creator_id === user.id) {
//         you_owe += bill.total_bill/2;
//       };
//     });
//
//       total += you_owe;
//
//   })
//
//   debugger
//
//   return total;
//
// }

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPrivate);
