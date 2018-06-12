import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateBill extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <div className="create-bill-form">
        <header>
          <div>Add a bill</div>
          <a className="dismiss">X</a>
        </header>

        <div className="withUser">
          <span className="bill-with">With <strong>you</strong> and:</span>
          <div className="bill-user">
            <div id="bill-user-pic"></div>

          </div>
        </div>

      </div>
    )
  }


}

export default withRouter(CreateBill)
