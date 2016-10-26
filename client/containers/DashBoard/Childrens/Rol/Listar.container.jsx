/**
  Contenedor para listar roles
*/

import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListarRolesComponent from '../../../../components/Dashboard/Childrens/Rol/ListarRoles.component.jsx';
import * as RolActions from '../../../../actions/rol.js';

import NotificationSystem from 'react-notification-system';

class ListarRoles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabla_datos: [],
      cargando: true
    };
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  // Antes de renderizar el componente
  componentWillMount() {
    const { actions } = this.props;

    actions.listar().then(() => {
      var data = this.props.rol.rol.toJS();
      console.log('list roles ===>>=>==> ', data);

      this.setState({
        tabla_datos: data.data_list_roles,
        cargando: false
      });
    }).catch(err => {
      console.log('ERROR> ', err);

      this.setState({
        cargando: false
      });
    });
  }

  render() {
    return (
      <div>
        {
          this.state.cargando ? <div className="col-md-3">
            <div className="box box-danger">
              <div className="box-header">
                <h3 className="box-title">Cargando roles</h3>
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

        <ListarRolesComponent tabla_datos={this.state.tabla_datos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("Los state de rol:", state);

  return {
    rol: state.rol
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RolActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListarRoles);
