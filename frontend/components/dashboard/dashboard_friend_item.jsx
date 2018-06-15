import React from 'react';
import { Link } from 'react-router-dom';

const DashboardFriendItem = (props) => {

    const createBillBtn = () => {

      if (props.isOpen) {
        props.closeModal();
      } else {
        props.openModal('createBill', props.user);
      }
    };

    const openBillComments = (bill) => {
      props.fetchBill(bill.id);

      props.openModal('comments', bill);
    };

    const deleteBill = (billId) => {
      let billmems = [];

      Object.values(props.billmemberships).forEach((bm) => {
        if (bm.bill_id === billId) {
          billmems.push(bm);
        }
      })

      let billmemId = billmems[0].id
      let billmemId2 = billmems[1].id

      props.removeBill(billId, billmemId, billmemId2);
    };

    if (props.user !== '' && props.user !== '#private_dashboard#') {
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

                if ((bm.member_id === props.user.id && ((props.bills)[bm.bill_id]).creator_id === props.currentUserId) || false) {
                  return (
                    <li key={i} className="friend-bill-item">
                      <div id="bill-title-date" onClick={ () => openBillComments((props.bills)[bm.bill_id]) }>
                        <div id="date">{((props.bills)[bm.bill_id]).date}</div>
                        <div id="list-icon"></div>
                        <div id="title">{((props.bills)[bm.bill_id]).title.slice(0,25)}</div>
                      </div>

                      <div id="bill-amount" onClick={ () => openBillComments((props.bills)[bm.bill_id]) }>
                        <label>you paid</label>
                        <div id="total"><a>$</a>{((props.bills)[bm.bill_id]).total_bill}</div>
                      </div>

                      <div id="bill-amount-2" onClick={ () => openBillComments((props.bills)[bm.bill_id]) }>
                        <label>you lent {props.user.user_name.slice(0,20)}</label>
                        <div id="total-2"><a>$</a>{((props.bills)[bm.bill_id]).total_bill/2}</div>
                      </div>

                      <a id="delete-bill" onClick= { () => deleteBill(bm.bill_id) } >X</a>
                    </li>
                  )
                } else if (bm.member_id === props.currentUserId && ((props.bills)[bm.bill_id]).creator_id === props.user.id || false) {
                  return (
                    <li key={i} className="friend-bill-item">
                      <div id="bill-title-date" onClick={ () => openBillComments((props.bills)[bm.bill_id]) }>
                        <div id="date">{((props.bills)[bm.bill_id]).date}</div>
                        <div id="list-icon"></div>
                        <div id="title">{((props.bills)[bm.bill_id]).title.slice(0,25)}</div>
                      </div>

                      <div id="bill-amount" onClick={ () => openBillComments((props.bills)[bm.bill_id]) }>
                        <label>they paid</label>
                        <div id="total"><a>$</a>{((props.bills)[bm.bill_id]).total_bill}</div>
                      </div>

                      <div id="bill-amount-2" onClick={ () => openBillComments((props.bills)[bm.bill_id]) }>
                        <label>you owe {props.user.user_name.slice(0,20)}</label>
                        <div id="total-2-orange"><a>$</a>{((props.bills)[bm.bill_id]).total_bill/2}</div>
                      </div>

                      <a id="delete-bill" onClick= { () => deleteBill(bm.bill_id) } >X</a>
                    </li>
                  )
                }


              })}
            </div>


          </div>
        </div>
      );
    } else {
      return (null);
    }




};

export default DashboardFriendItem;
