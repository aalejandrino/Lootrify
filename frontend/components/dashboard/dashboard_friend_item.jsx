import React from 'react';
import { Link } from 'react-router-dom';

const DashboardFriendItem = (props) => {

    const createBillBtn = () => {

      if (props.isOpen) {
        props.closeModal()
      } else {
        props.openModal('createBill', props.user)
      }
    }

    if (props.user !== '') {
      return (
        <div>
          <div id="user-show">
            <div id="friend-name">
              <div id='profile-pic-2'></div>
              <h1>{props.user.user_name}</h1>
            </div>

            <div id="user-show-btns">
              <button onClick={createBillBtn.bind(this)}>Add a Bill</button>
              <button>Settle Up</button>
            </div>

          </div>

          <div className="friend-bill-list">
            <ul>
              {Object.values(props.bills.billmemberships).map((bm, i) => {

                if (bm.member_id === props.user.id && (((props.bills.bills)[bm.bill_id]).creator_id === props.currentUserId)) {
                  return (
                    <li key={i} className="friend-bill-item">
                      <div id="bill-title-date">
                        <div>{((props.bills.bills)[bm.bill_id]).date}</div>

                        <div>{((props.bills.bills)[bm.bill_id]).title}</div>
                      </div>

                      <div id="bill-amount">
                        <label>you paid</label>
                        <div>{((props.bills.bills)[bm.bill_id]).total_bill}</div>

                        <label>you lent {props.user.user_name}</label>
                        <div>{((props.bills.bills)[bm.bill_id]).total_bill/2}</div>
                      </div>

                    </li>
                  )
                }})}
            </ul>

          </div>
        </div>
      )
    } else {
      return (<div></div>)
    }

// this needs its own container to pass the state of posts

};

export default DashboardFriendItem;
