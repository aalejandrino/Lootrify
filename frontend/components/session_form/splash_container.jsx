import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Splash from './splash';

const DEMO = {
  0: 'Jamie Lannister',
  1: 'Tyrion Lannister',
  2: 'Jon Snow'
  // 3: 'Arya Stark',
  // 4: 'Oberyn Martell',
  // 5: 'Khal Drogo',
  // 6: 'Sansa Stark',
  // 7: 'Margaery Tyrell',
  // 8: 'Bran Stark',
  // 9: 'Ramsay Bolton',
  // 10: 'Jorah Mormont',
  // 11: 'Samwell Tarly',
  // 12: 'Tommen Baratheon',
  // 13: 'Davos Seaworth'
}

const mapStateToProps = (state, ownProps) => ({
  user: {user_name: DEMO[Math.floor(Math.random()*3)], password: 'demoUser'},
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeModal: () => dispatch(closeModal()),
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
