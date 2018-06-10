
import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {

  componentDidMount() {

  }

  constructor(props) {
    super(props);

    this.state = props.search;

  };

  render() {
    return (
      <div className="friend-search-form">
        <div id="friend-form-title">
          <h3>
            <span>
            </span>
            <div>
              Invite friends
            </div>
          </h3>

          <div>
            X
          </div>
        </div>
        <br></br>

        <form>
          <input type="text" />
          <textarea placeholder="Include an optional message"></textarea>
        </form>

        <button>search for friend</button>
      </div>
    )
  }
}
export default withRouter(SearchForm);
