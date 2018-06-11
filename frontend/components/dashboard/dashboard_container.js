import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state, ownProps) => ({
  isOpen: Boolean(state.ui.modal)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
