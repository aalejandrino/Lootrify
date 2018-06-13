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
            <div>
              {Object.values(props.billmemberships).map((bm, i) => {

                if (bm.member_id === props.user.id && (((props.bills)[bm.bill_id]).creator_id === props.currentUserId)) {
                  return (
                    <li key={i} className="friend-bill-item">
                      <div id="bill-title-date">
                        <div id="date">{((props.bills)[bm.bill_id]).date}</div>
                        <div id="list-icon"></div>
                        <div id="title">{((props.bills)[bm.bill_id]).title.slice(0,30)}</div>
                      </div>

                      <div id="bill-amount">
                        <label>you paid</label>
                        <div id="total"><a>$</a>{((props.bills)[bm.bill_id]).total_bill}</div>
                      </div>

                      <div id="bill-amount-2">
                        <label>you lent {props.user.user_name}</label>
                        <div id="total-2"><a>$</a>{((props.bills)[bm.bill_id]).total_bill/2}</div>
                      </div>

                    </li>
                  )
                }})}
            </div>


          </div>
        </div>
      )
    } else {
      return (<div></div>)
    }

// this needs its own container to pass the state of posts

};

export default DashboardFriendItem;
