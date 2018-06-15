import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SearchFormContainer from '../search/search_form_container';
import CreateBillContainer from '../bill/create_bill_container';
import EditBillContainer from '../bill/edit_bill_container';
import CommentsContainer from '../comment/comment_form_container';

function Modal({modal, data, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'addFriend':
      component = <SearchFormContainer />;
      break;
    case 'createBill':
      component = <CreateBillContainer data={data} />;
      break;
    case 'editBill':
      component = <EditBillContainer data={data} />;
      break;
    case 'comments':
      component = <CommentsContainer data={data} />;
      break;
    default:
      return null;
  }
  return (
  <div className="modal-background" onClick={closeModal}>
    <div className="modal-child" onClick={e => e.stopPropagation()}>
      { component }
    </div>
  </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    data: state.ui.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
