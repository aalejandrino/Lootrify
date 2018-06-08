import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Splash from './splash';

const mapStateToProps = (state, ownProps) => ({
  user: {user_name: 'demoUser', password: '123456'},
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeModal: () => dispatch(closeModal()),
  processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
