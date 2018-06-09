
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
      <div>
        <h1>SEARCH FORM HERE</h1>
        <br></br>

        <form>
          <input type="text" />

          <button>hello</button>
        </form>

        <h4>
          {
            this.state.map((user) => (
              user.user_name
            ))
          }
        </h4>
      </div>
    )
  }
}
export default withRouter(SearchForm);
