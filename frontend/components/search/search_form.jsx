
import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.search;

  }




  render() {
    return (
      <div>

        <h1> Search Form Here!! </h1>

      </div>
    )
  }

}

export default withRouter(SearchForm)
