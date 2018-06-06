import { connect } from 'react-redux';
// createUser?
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  user: {user_name: '', password: '', email: '',
          phone: '__________', img_url: 'default_url' },
  errors: state.errors.session,
  formType: 'Sign Up'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(createUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
