import React from 'react';
import { Link } from 'react-router-dom';

const DashboardFriendItem = (props) => {


    return (

      <div id="user-show">
        <div id="friend-name">
          <div id='profile-pic-2'></div>
          <h3>{props.user.user_name}</h3>
        </div>

        <div id="user-show-btns">
          <button>Add a Bill</button>
          <button>Settle Up</button>
        </div>
      </div>

    )
};

export default DashboardFriendItem;
