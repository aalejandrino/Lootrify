import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class DashboardPrivate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      total_balance: 0,
      you_owe: 0,
      you_are_owed: 0
    };

    this.total_owed = 0;
    this.total_you_are_owed = 0;

    // setTimeout(alert('hello'), 1000);
    this.setBalances();

    this.updateTotalOwed = this.updateTotalOwed.bind(this);
    this.updateYouAreOwed = this.updateYouAreOwed.bind(this);
    this.updateTotalBalance = this.updateTotalBalance.bind(this);
  }

  you_are_owed() {

  }

  CurrencyFormatted(amount) {

  	var i = parseFloat(amount);
  	if(isNaN(i)) { i = 0.00; }
  	var minus = '';
  	if(i < 0) { minus = '-'; }
  	i = Math.abs(i);
  	i = parseInt((i + .005) * 100);
  	i = i / 100;
  	let s = new String(i);
  	if(s.indexOf('.') < 0) { s += '.00'; }
  	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
  	s = minus + s;
  	return s;
  }

  selectFriend(user) {
    return (e) => {

      this.props.update(user);
      this.props.closeModal();
    }
  }

  render() {
    if (this.state.total_balance >= 0) {
      var total_b = (<a id="positive">+${this.CurrencyFormatted(this.state.total_balance)}</a>)
    } else {
      var total_b = (<a id="negative">-${this.CurrencyFormatted(Math.abs(this.state.total_balance))}</a>)
    }

    if (this.props.selected === '#private_dashboard#') {
      return (
        <div>
          <div id="private-dashboard">
            <div id="private-dashboard-heading">
              <h1>Dashboard</h1>
            </div>
          </div>

          <div id="dashboard-balances">
            <div id="total-balances">
              <div id="total-balance">total balance: {total_b}</div>
              <div id="you-owe">you owe: <a id="negative">${this.CurrencyFormatted(this.state.you_owe)}</a></div>
              <div id="you-are-owed">you are owed: <a id="positive">${this.CurrencyFormatted(this.state.you_are_owed)}</a></div>
            </div>

            <h2 id="category">
              <span id="owe-left">YOU OWE</span>
              <span id="owe-right">YOU ARE OWED</span>
            </h2>

            <div className='balance-summary'>

              <div className='summary' id="negatives">
                <ul>
                  {
                    this.props.users.map((user, i) => {
                      let you_owe = 0;

                      let billmems = (this.props.billmemberships
                                        .filter(billmem => (billmem.member_id === this.props.currentUserId)));

                      let bills = (billmems.map(billmem => this.props.bills[billmem.bill_id]));

                      bills.forEach((bill) => {
                        if (bill.creator_id === user.id) {
                          you_owe += bill.total_bill/2;

                        };
                      })

                      if (you_owe > 0 && user.id !== this.props.currentUserId) {
                        return (

                          <li key={i} id="highlight">
                            <div className="user_pic"></div>
                            <div className="dashboard-users" onClick={this.selectFriend(user).bind(this)}>
                              <div id="you_owe">you owe <strong>${this.CurrencyFormatted(you_owe)}</strong></div>
                              <div id="username"><font size="2">to</font> {user.user_name}</div>
                            </div>
                         </li>

                        )
                      }

                    })
                  }

                </ul>
              </div>

              <div className='summary' id="positives">

                <ul>
                  {
                    this.props.users.map((user, i) => {
                      let money_owed = 0;

                      let billmems = (this.props.billmemberships
                                        .filter(billmem => (billmem.member_id === user.id)));

                      let bills = (billmems.map(billmem => this.props.bills[billmem.bill_id]));

                      bills.forEach((bill) => {
                        if (bill.creator_id === this.props.currentUserId) {
                          money_owed += bill.total_bill/2;
                        };
                      })

                      if (money_owed > 0 && user.id !== this.props.currentUserId) {

                        return (
                          <li key={i} id="highlight">
                            <div className="user_pic"></div>
                            <div className="dashboard-users" onClick={this.selectFriend(user).bind(this)}>
                              <div id="username">{user.user_name}</div>
                            <div id="money_owed">owes you <strong>${this.CurrencyFormatted(money_owed)}</strong></div>
                            </div>
                           </li>
                        )
                      }
                    })

                  }
                </ul>
              </div>
            </div>

          </div>

        </div>
      )
    } else {
      return (<div></div>)
    }
  }

  updateTotalOwed() {
    this.total_owed = 0;
    this.props.users.forEach((user, i) => {

      let billmems = (this.props.billmemberships
                        .filter(billmem => (billmem.member_id === this.props.currentUserId)));

      let bills = (billmems.map(billmem => this.props.bills[billmem.bill_id]));
      // debugger
      bills.forEach((bill) => {

        if (bill.creator_id === user.id && user.id !== this.props.currentUserId) {

          this.total_owed += bill.total_bill/2;
        };

        this.setState({you_owe: this.total_owed})

      })
    }
  )};

  updateYouAreOwed() {
    this.total_you_are_owed = 0;
    this.props.users.forEach((user, i) => {

      let billmems = (this.props.billmemberships
                        .filter(billmem => (billmem.member_id === user.id)));

      let bills = (billmems.map(billmem => this.props.bills[billmem.bill_id]));
      // debugger
      bills.forEach((bill) => {

        if (bill.creator_id === this.props.currentUserId && user.id === this.props.currentUserId) {

          this.total_you_are_owed += bill.total_bill/2;
        };

        this.setState({you_are_owed: this.total_you_are_owed})

      })
    }
  )};

  updateTotalBalance() {
    let total_owed = this.state.you_are_owed;
    let total_you_owe = this.state.you_owe;
    this.setState({total_balance: (total_owed - total_you_owe)})
  }

  setBalances() {
    setInterval(this.updateTotalOwed.bind(this), 1000);
    setInterval(this.updateYouAreOwed.bind(this), 1000);
    setInterval(this.updateTotalBalance.bind(this), 1200);

  }



}

export default DashboardPrivate
