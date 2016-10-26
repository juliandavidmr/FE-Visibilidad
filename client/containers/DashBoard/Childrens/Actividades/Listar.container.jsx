/**
  Contenedor para listar actividades
*/


import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListarActividadesComponent from '../../../../components/Dashboard/Childrens/Actividades/Listar.Actividad.component.jsx';
import * as ActividadActions from '../../../../actions/actividad.js';

class ListarActividades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabla_datos: [],
      cargando: true
    };
  }

  // Antes de renderizar el componente
  componentWillMount() {
    const { actions } = this.props;

    actions.listar().then(() => {
      let data = this.props.actividad.actividad.toJS();

      console.log('list actividades ===>>=>==> ', data);

      this.setState({
        tabla_datos: data.data_list_actividades,
        cargando: false
      });
    }).catch(err => {
      console.log('ERROR> ', err);
    });
  }

  render() {
    return (
      <div>
        {
          this.state.cargando ? <div className="col-md-3">
            <div className="box box-danger">
              <div className="box-header">
                <h3 className="box-title">Cargando actividades</h3>
              </div>
              <div className="box-body">
                Espere por favor...
              </div>

              <div className="overlay">
                <i className="fa fa-refresh fa-spin"></i>
              </div>
            </div>
          </div> : null
        }

        <ListarActividadesComponent tabla_datos={this.state.tabla_datos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("Los state de activdad:", state);

  return {
    actividad: state.actividad
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActividadActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListarActividades);
