import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class DashboardPrivate extends React.Component {

  // componentDidMount() {
  //   this.props.users.forEach((user, i) => {
  //     this.money_owed = 0;
  //
  //     let billmems = (this.props.billmemberships
  //                       .filter(billmem => (billmem.member_id === user.id)));
  //
  //     let bills = (billmems.map(billmem => this.props.bills[billmem.bill_id]));
  //
  //     bills.forEach((bill) => {
  //       if (bill.creator_id === this.props.currentUserId) {
  //         this.money_owed += bill.total_bill;
  //       }
  //
  //     })
  //   })
  //
  // }

  constructor(props) {
    super(props);

    this.state = {
      total_balance: 0,
      you_owe: 0,
      you_are_owed: 0
    };

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

  render() {
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
              <div id="total-balance">total balance: {this.state.total_balance}</div>
              <div id="you-owe">you owe: {this.state.you_owe}</div>
              <div id="you-are-owed">you are owed: {this.state.you_are_owed}</div>
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

                          <li key={i}>
                            <div className="user_pic"></div>
                            <div className="dashboard-users">
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
                          <li key={i}>
                            <div className="user_pic"></div>
                            <div className="dashboard-users">
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
}

export default DashboardPrivate
