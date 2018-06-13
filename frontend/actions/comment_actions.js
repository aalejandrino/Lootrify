import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const rmvComment = id => ({
  type: REMOVE_COMMENT,
  id
})

export const fetchComments = (billId) => dispatch => (
  CommentAPIUtil.fetchComments(billId)
    .then(commentsRes => dispatch(receiveComments(commentsRes)))
)

export const createComment = (billId, comment) => dispatch => (
  CommentAPIUtil.createComment(billId, comment)
    .then(commentRes => dispatch(receiveComment(commentRes)))
)

export const removeComment = (billId, id) => dispatch => (
  CommentAPIUtil.removeComment(billId, id)
    .then(res => dispatch(rmvComment(res.id)))
)
