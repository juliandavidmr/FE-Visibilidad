import React, { Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InsertarActividadComponent from '../../../../components/Dashboard/Childrens/Actividades/InsertarActividad.component.jsx';

import * as ActividadActions from '../../../../actions/actividad.js';
import * as TipoActividad from '../../../../actions/tipoactividad.js';
import * as Evento from '../../../../actions/evento.js';

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
      list_tipo_actividades: []
    };

    this.fetchTiposActividades = this.fetchTiposActividades.bind(this);
    this.fetchEventos = this.fetchEventos.bind(this);

    this.fetchTiposActividades();
    this.fetchEventos();
  }

  _handleClick() {
    console.log('Click en registrar actividad');
    const { actions_actividad } = this.props;
  }

  fetchTiposActividades() {
    const { actions_tipo_actividad } = this.props;

    actions_tipo_actividad.listar().then(_ => {
      var data = this.props.tipoactividad.tipoactividad.toJS();
      console.log('=> list Tipo de actividad: ', data);

      this.setState({
        list_tipo_actividades: data.data_list_tipoactividades
      });
    });
  }

  fetchEventos() {
    const { actions_eventos } = this.props;
    
    actions_eventos.listar().then(_ => {
      var data = this.props.evento.evento.toJS();
      console.log('=> list evento: ', data);

      this.setState({
        list_eventos: data.data_list_eventos
      });
    });
  }

  render() {
    return (
      <div>
        <InsertarActividadComponent
          evento_list={this.state.list_eventos}
          tipos_actividades_list={this.state.list_tipo_actividades}
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
    nivel: state.actividad,
    tipoactividad: state.tipoactividad,
    evento: state.evento
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions_actividad: bindActionCreators(ActividadActions, dispatch),
    actions_tipo_actividad: bindActionCreators(TipoActividad, dispatch),
    actions_eventos: bindActionCreators(Evento, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsertarActividad);
