import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateBill extends React.Component {
  constructor(props) {
    super(props);

  }

  close() {
    this.props.closeModal();
  }

  render() {


    return(
      <div className="create-bill-form">
        <header>
          <div>Add a bill</div>
          <a className="dismiss btn" onClick={this.close.bind(this)}>X</a>
        </header>

        <div className="withUser">
          <span className="bill-with">With <strong>you</strong> and:</span>
          <div className="bill-user">
            <div id="bill-user-pic"></div>
            <div id="bill-username">{this.props.user.user_name}</div>
          </div>
        </div>

        <div className="body">
          
        </div>
      </div>
    )
  }


}

export default withRouter(CreateBill)
