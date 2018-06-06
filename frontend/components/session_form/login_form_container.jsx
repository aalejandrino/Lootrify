import { connect } from 'react-redux';
import receiveCurrentUser from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  user: {user_name: '', password: ''},
  errors: state.errors.session,
  formType: 'Log In'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (id) => dispatch(receiveUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
