import React from 'react';
import { withRouter } from 'react-router-dom';

class Comments extends React.Component {

  

  constructor(props) {
    super(props);

  }

  render() {

    return(
      <div>
        <h3>
          comment form here
        </h3>
      </div>
    );
  }


}

export default withRouter(Comments);
