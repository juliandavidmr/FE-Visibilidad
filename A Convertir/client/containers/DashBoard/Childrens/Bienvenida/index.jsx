import React, {Component, PropTypes} from 'react';

class BienvenidaContainer extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="content-wrapper">
        <div className="page-header">
          <h1>Example page header <small>Subtext for header</small></h1>
        </div>
      </div>
    );
  }
}

BienvenidaContainer.propTypes = {

};

export default BienvenidaContainer;