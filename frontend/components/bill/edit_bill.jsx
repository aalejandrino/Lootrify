import React from 'react';
import { withRouter } from 'react-router-dom';

class EditBill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.targetBill.title,
      creator_id: props.targetBill.creator_id,
      total_bill: props.targetBill.total_bill,
      date: props.targetBill.date
    };

  }

  close() {
    this.props.closeModal();
  }

  handleTitle(e) {
    this.setState({title: e.currentTarget.value});
  }

  handleValue(e) {
    this.setState({total_bill: e.currentTarget.value});
  }

  handle(content) {
    return (e) => (this.setState({[content]: e.currentTarget.value}));
  }

  handleSubmit() {

    this.props.updateBill(this.state, this.props.targetBill.id).then( () => {

      this.props.closeModal();

      setTimeout(this.props.fetchBills, 500);

    },
    () => alert("Please enter a description and $ amount !")
   );

  }

  render() {

    return(
      <div className="create-bill-form">
        <header>
          <div>Edit a bill</div>
          <a className="dismiss btn" onClick={this.close.bind(this)}>X</a>
        </header>

        <div className="withUser">
          <span className="bill-with">With <strong>you</strong> and:</span>
          <div className="bill-user">
            <div id="bill-user-pic"></div>
            <div id="bill-username">{this.props.targetUser.user_name}</div>
          </div>
        </div>

        <div className="body">
          <div className="body-1">
            <div id="body-gift-icon"></div>
            <div id="body-1-inputs">
              <input type="text" onChange={this.handle('title')} placeholder="Enter a description" value={this.state.title}></input>
              <div id="body-1-inputs-num">
                <a>$</a><input type="number" onChange={this.handle('total_bill')} placeholder="0.00" value={this.state.total_bill}></input>
              </div>
            </div>
          </div>
          <br></br>

          <div className="body-2">
            Paid by
            <strong> you </strong>
            and split
            <strong> equally </strong>
            .
            <div>(${this.state.total_bill/2 || 0}/person)</div>
          </div>
          <br></br>

          <div className="body-3">
            <input type="date" onChange={this.handle('date')} value={this.state.date}></input>
          </div>
          <br></br>

        </div>

        <footer className="bill-footer">
          <div className="footer-btns btn">
            <button onClick={this.close.bind(this)}>Cancel</button>
            <button onClick={this.handleSubmit.bind(this)}>Save</button>
          </div>
        </footer>
      </div>
    );
  }


}

export default withRouter(EditBill);
