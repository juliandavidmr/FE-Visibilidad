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
    const {onClickRegistrar} = this.props;

    return (
      <div className="row">
        <div className="col-md-6">

          <div className="box box-danger">
            <div className="box-header">
              <h3 className="box-title">Input masks</h3>
            </div>
            <div className="box-body">
              <div className="form-group">
                <label>Nombre rol</label>
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-laptop"></i>
                  </div>
                  <input type="text" name="" placeholder="" onChange={this.handleChange}/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListarRolesComponent.propTypes = {
  onChangeText: PropTypes.func.isRequired
};

export default ListarRolesComponent;
