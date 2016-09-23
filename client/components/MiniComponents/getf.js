var CONSTANTS = {
  TEXT: 'TEXT',
  SELECT: 'SELECT',
  RADIO: 'RADIO',
  CHECKBOX: 'CHECKBOX',
  BUTTON: 'BUTTON'
};

var schema = {
  inputs: [{
    type: CONSTANTS.TEXT,
    name: 'name1',
    placeholder: 'un placeholder',
    change: () => {
      console.log('Change ', this.name);
    },
    click: () => {
      console.log('Click ', this.name);
    }
  }]
};

import React, {Component, PropTypes} from 'react';

class Getf extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

Getf.propTypes = {
  schema: PropTypes.any.isRequired
};

export default Getf;