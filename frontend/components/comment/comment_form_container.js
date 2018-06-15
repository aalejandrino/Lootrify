import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchComments, createComment, removeComment } from '../../actions/comment_actions';
import Comments from './comment_form';

const mapStateToProps = (state, ownProps) => {

  return ({
    form: {
      body: '',
      bill_id: state.ui.data.bill.id, //targetBill.id
      author_id: state.session.id //currentUserId
    },
    targetUser: state.ui.data.user,
    targetBill: state.ui.data.bill, //passed data from modal actions
    currentUserId: state.session.id,
    comments: Object.values(state.entities.comments),
    users: state.entities.users
  });
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  closeModal: () => dispatch(closeModal()),
  fetchComments: (billId) => dispatch(fetchComments(billId)),
  createComment: (billId, comment) => dispatch(createComment(billId, comment)),
  removeComment: (billId, id) => dispatch(removeComment(billId, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
