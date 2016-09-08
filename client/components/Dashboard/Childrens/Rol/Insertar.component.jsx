import React, {Component, PropTypes} from 'react';

class ListarRolesComponent extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChangeText(e);
  }

  render() {
    const { onClickRegistrar } = this.props;

    return (
      <input type="text" name="" placeholder="" onChange={this.handleChange} />            
    );
  }
}

ListarRolesComponent.propTypes = {
  onChangeText: PropTypes.func.isRequired
};

export default ListarRolesComponent;