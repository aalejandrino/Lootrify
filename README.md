# Lootrify
Full Stack Project
April 16, 2016 - App Academy Cohort

You can access this app here: <br>
[Live Page](https://lootrify.herokuapp.com/)

  Lootrify is a web application that allows users to create a bill, keep a detailed record of the transaction, and split it among coworkers, friends, and family. It also has a private dashboard which lists all pending transactions involving you and others.

## Table of Contents
  * Features
  * ...
  * Pass Data Through Modals
  * Multiple Demo Users
  * Future Functionalities


## Features
  * Splash Pages includes a a Sign Up / Sign In feature on the top right.

  A new user can also use the Demo Login (featuring Game of Thrones characters) at the bottom to test out the application before signing up.

  ![](https://s6.postimg.cc/eip7y502p/Splash.png)

  * Once logged in, the user can:

    * Adding others through an auto-complete friends form.
    * Create new bills with a friend. Each friend lists all bills associated between you and them.
    * Clicking on an individual bill will open up a comment / edit form.

  ![](https://s6.postimg.cc/pwgcmo7kh/friend_show.png)

  * The Private Dashboard lists all bills associated with you. Clicking on one will direct you to the friend's bill page.

  ![](https://s6.postimg.cc/4msqc11m9/dashboard.png)


## Pass Data through Modals
  * This application relies on modals, which somewhat made things complicated because I would lose access to some data.

  One way to get around this was to pass those necessary data through the modal actions!

```JS
// Modal Actions File
export const openModal = (modal, data) => {
  return {
    type: OPEN_MODAL,
    modal,
    data
  };
};

// Modal Component File
function Modal({modal, data, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'addFriend':
      component = <SearchFormContainer />;
      break;
    case 'createBill':
      component = <CreateBillContainer data={data} />;
      break;
    case 'editBill':
      component = <EditBillContainer data={data} />;
      break;
    case 'comments':
      component = <CommentsContainer data={data} />;
      break;
    default:
      return null;
  }
  return (
  <div className="modal-background" onClick={closeModal}>
    <div className="modal-child" onClick={e => e.stopPropagation()}>
      { component }
    </div>
  </div>
  );
}

// Container Files you want to pass data to
const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    targetBill: state.ui.data.bill, //passed data from modal actions
    targetUser: state.ui.data.user
  });
};

```

## Multiple Demo Users

Having one demo user is boring, why not add multiple favorite characters?

```JS
const DEMO = {
  0: 'Jamie Lannister',
  1: 'Tyrion Lannister',
  2: 'Jon Snow',
  3: 'Arya Stark',
  4: 'Oberyn Martell',
  5: 'Khal Drogo',
  6: 'Sansa Stark',
  7: 'Margaery Tyrell',
  8: 'Bran Stark',
  9: 'Ramsay Bolton',
  10: 'Jorah Mormont',
  11: 'Samwell Tarly',
  12: 'Tommen Baratheon',
  13: 'Davos Seaworth'
}

const mapStateToProps = (state, ownProps) => ({
  user: {user_name: DEMO[Math.floor(Math.random()*14)], password: 'demoUser'},
});
```

## Future Functionalities
  * Settling debts between users (fake "checkout")
  * Create groups to add multiple users
  * Bills to add multiple users
  * "Recent Activities" and "All Expenses" pages in addition to the Private Dashboard
  * Access to Private Profile and change personal information
