import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = (user) => {

  return{
    type: RECEIVE_CURRENT_USER,
    user
  }
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const clrErrors = () => ({
  type: CLEAR_ERRORS
})

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user).then(userRes => dispatch(receiveCurrentUser(userRes)),
                                   (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user).then(userRes => dispatch(receiveCurrentUser(userRes)),
                                    (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(userRes => dispatch(logoutCurrentUser()))
);

export const clearErrors = () => dispatch => (
  dispatch(clrErrors())  
);
