import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import DashboardPrivate from './dashboard_private';



const mapStateToProps = (state, ownProps) => {

  return (
    {
      currentUserId: state.session.id,
      billmemberships: Object.values(state.entities.billmemberships),
      bills: state.entities.bills,
      users: Object.values(state.entities.users),
    }
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  closeModal: () => dispatch(closeModal()),

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPrivate);
