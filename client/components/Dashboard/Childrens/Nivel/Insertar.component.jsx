import React, {Component, PropTypes} from 'react';

class InsertarNivelComponent extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { onChangeTextNombre, onChangeTextDescripcion, botonguardar } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Listado de niveles</h3>

              <div className="box-body">
                <div className="form-group">
                  <label>Nombre</label>
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-laptop"></i>
                    </div>
                    <input type="text" name="" placeholder="" onChange={onChangeTextNombre}/>
                  </div>
                </div>

                <div className="form-group">
                  <label>Descripcion</label>
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-laptop"></i>
                    </div>
                    <input type="text" name="" placeholder="" onChange={onChangeTextDescripcion}/>
                  </div>
                </div>

                {
                  botonguardar
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

InsertarNivelComponent.propTypes = {
  onChangeTextNombre: PropTypes.func.isRequired,
  onChangeTextDescripcion: PropTypes.func.isRequired,
  botonguardar: PropTypes.object.isRequired
};

export default InsertarNivelComponent;