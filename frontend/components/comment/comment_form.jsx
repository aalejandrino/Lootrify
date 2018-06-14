import React from 'react';
import { withRouter } from 'react-router-dom';

class Comments extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: '',
      bill_id: props.targetBill.id,
      author_id: props.currentUserId
    }


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
          <i className="fas fa-comments"><div>Notes and Comments</div></i>
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

          <button onClick={ this.handleSubmit.bind(this) }>Post</button>
        </div>

      </div>
    );
  }


}

export default withRouter(Comments);
