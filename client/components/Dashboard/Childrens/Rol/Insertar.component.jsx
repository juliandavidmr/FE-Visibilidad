import React, {Component, PropTypes} from 'react';

class ListarRolesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descripcion: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      descripcion: event.target.value
    });
  }

  render() {
    const { onClickRegistrar } = this.props;

    return (
      <div className="content-wrapper">
        {
          this.state.descripcion
        }
        <input type="text" name="" value={this.state.descripcion} placeholder="" onChange={this.onChange} />
        <button type="button" onClick={onClickRegistrar}>Insertar</button>
      </div>
    );
  }
}

ListarRolesComponent.propTypes = {
  onClickRegistrar: PropTypes.func.isRequired
};

export default ListarRolesComponent;