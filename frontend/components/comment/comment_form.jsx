import React from 'react';
import { withRouter } from 'react-router-dom';

class Comments extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.form;

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handle(content) {
    return (e) => this.setState({[content]: e.currentTarget.value})
  }

  handleSubmit() {
    // debugger
    this.props.createComment(this.state.bill_id, this.state)
    setTimeout(this.setState({body: ''}), 500);
  }

  handleEdit() {
    if (this.props.targetBill.creator_id === this.props.currentUserId) {

          this.props.closeModal();
          setTimeout(this.props.openModal('editBill', {bill: this.props.targetBill, user: this.props.targetUser}), 1000);

    } else {
      alert('You must be the bill moderator to edit !');
    }
  }

  close() {
    this.props.closeModal();
  }

  removeComment(comment) {
    return (e) => this.props.removeComment(this.props.targetBill.id, comment.id)
  }

  render() {
    // debugger
    return(
      <div className="comments-form">

        <header id="comments-title">
          <i className="fas fa-comments"><div>Comments / Edit Bill</div></i>
          <a className="dismiss btn" onClick={this.close.bind(this)}>x</a>
        </header>

        <div className="comments-list">
          {
            this.props.comments.map((comment, i) => {
              if (comment.bill_id === this.props.targetBill.id) {
                return(

                    <li key={i} className="comment">
                      <div id="name">{this.props.users[comment.author_id].user_name}</div>
                      <div>{comment.body}</div>
                      <a id="remove-comment" onClick={this.removeComment(comment).bind(this)}>x</a>
                    </li>

                )
              } else {
                return null
              }
            })
          }
        </div>

        <div id="text-and-submit">
          <textarea placeholder="Add a comment" onChange={this.handle('body')} value={this.state.body} />

          <button id="post-button" onClick={ this.handleSubmit.bind(this) }>Post</button>
          <button id="edit-button" onClick={ this.handleEdit.bind(this) }>Edit</button>
        </div>

      </div>
    );
  }


}

export default withRouter(Comments);
