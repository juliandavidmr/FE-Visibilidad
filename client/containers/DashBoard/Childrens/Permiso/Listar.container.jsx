/**
  Contenedor para listar roles
*/

import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListarPermisosComponent from '../../../../components/Dashboard/Childrens/Permiso/ListarPermisos.component.jsx';
import * as PermisoActions from '../../../../actions/permisos.js';

class ListarPermisos extends Component {
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
      console.log('list permisos ===>>=>==> ', this.props.permiso.permiso.toJS());

      this.setState({
        tabla_datos: this.props.permiso.permiso.toJS().data_list_permisos,
        cargando: false
      });
    }).catch(err => {
      console.log('ERROR> ', err);
    });
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        {
          this.state.cargando ? <div className="col-md-3">
            <div className="box box-danger">
              <div className="box-header">
                <h3 className="box-title">Cargando permisos</h3>
              </div>
              <div className="box-body">
                Espere por favor...
              </div>

              <div className="overlay">
                <i className="fa fa-refresh fa-spin"></i>
              </div>
            </div>
          </div> : ''
        }

        <ListarPermisosComponent tabla_datos={this.state.tabla_datos} />
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    permiso: state.permiso
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PermisoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListarPermisos);
