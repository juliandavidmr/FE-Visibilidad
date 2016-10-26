import React, { Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InsertarActividadComponent from '../../../../components/Dashboard/Childrens/Actividades/InsertarActividad.component.jsx';
import * as ActividadActions from '../../../../actions/actividad.js';

class InsertarActividad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descripcion: '',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      lugar: '',
      id_tipo_actividad: '',
      id_evento: '',
      ruta_adjunto: '',
      list_eventos: [],
      list_actividades: []
    };
  }

  _handleClick() {
    console.log('Click en registrar actividad');
    const { actions_actividad } = this.props;
  }

  fetchTiposActividades() {
    const { actions_eventos } = this.props;
  }

  render() {
    return (
      <div>
        <InsertarActividadComponent
          evento_list={this.list_eventos}
          tipos_actividades_list={this.list_actividades}
          onClickRegistrar={this._handleClick}
        />
      </div>
    );
  }
}

InsertarActividad.propTypes = {

};

function mapStateToProps(state) {
  return {
    nivel: state.actividad
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions_actividad: bindActionCreators(ActividadActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsertarActividad);
