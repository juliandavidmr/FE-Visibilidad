import React, { Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InsertarNivelComponent from '../../../../components/Dashboard/Childrens/Nivel/Insertar.component.jsx';
import * as NivelActions  from '../../../../actions/nivel';

class InsertarNivel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      descripcion: '',
      estado: 'T'
    };

    this._handleClick = this._handleClick.bind(this);
    this._onChangeInputNombre = this._onChangeInputNombre.bind(this);
    this._onChangeInputDescripcion = this._onChangeInputDescripcion.bind(this);
  }

  /**
   * Boton de registrar
   *
   * @memberOf InsertarNivel
   */
  _handleClick() {
    console.log('Click en registrar nivel');

    const { actions } = this.props;

    actions.registrar({
       nombre: this.state.nombre,
       descripcion: this.state.descripcion,
       estado: this.state.estado
    }).then(() => {
      console.log('Nivel registrado');
    });
  }

  /**
   * Detecta los cambios de estado del campo de texto Nombre
   *
   * @param {any} event
   *
   * @memberOf InsertarNivel
   */
  _onChangeInputNombre(event) {
    this.setState({
      nombre: event.target.value
    });
  }

  /**
   * Detecta los cambios de estado del campo Descripcion
   *
   * @param {any} event
   *
   * @memberOf InsertarNivel
   */
  _onChangeInputDescripcion(event) {
    this.setState({
      descripcion: event.target.value
    });
  }

  render() {
    var button = <button type="button" className="btn btn-success" onClick={this._handleClick}>
      Insertar
    </button>;

    return (
      <div>
        Container nivel

        <InsertarNivelComponent
          onChangeTextNombre={ this._onChangeInputNombre }
          onChangeTextDescripcion={ this._onChangeInputDescripcion}
          botonguardar={button}
        />
      </div>
    );
  }
}

InsertarNivel.propTypes = {

};

function mapStateToProps(state) {
  return {
    nivel: state.nivel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NivelActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsertarNivel);
