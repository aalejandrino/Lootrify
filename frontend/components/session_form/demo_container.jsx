import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Demo from './demo';

const mapStateToProps = (state, ownProps) => ({
  user: {user_name: 'demoUser', password: '123456'},
  formType: 'Demo'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
