import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Greeting from './greeting';

// const mapStateToProps = ({ session, entities: { users } }) => {
//   return {
//     currentUser: users[session.id]
//   };
// };
// from benchbnb

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  isOpen: Boolean(state.modal)
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
