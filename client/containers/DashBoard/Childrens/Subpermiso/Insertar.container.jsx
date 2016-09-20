/**
  Contenedor para Insertar un permiso
*/

import React, { Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InsertarSubpermisoComponent from '../../../../components/Dashboard/Childrens/Subpermiso/InsertarSubpermiso.component.jsx';
import * as SubpermisoActions from '../../../../actions/subpermisos.js';
import * as PermisosActions from '../../../../actions/permisos.js';

import * as Notification from '../../../../components/MiniComponents/Notifications.js';

import NotificationSystem from 'react-notification-system';

class InsertarSubpermiso extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      icono: '',
      subpermisos_list: []
    };

    this._handleClick = this._handleClick.bind(this);
    this._onChangeTextNombre = this._onChangeTextNombre.bind(this);
    this._onChangeTextIcono = this._onChangeTextIcono.bind(this);
    this.fetchPermisos = this.fetchPermisos.bind(this);

    this.fetchPermisos();
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  fetchPermisos() {
    const { actions_permisos } = this.props;

    actions_permisos.listar().then((subpermisos_list) => {

      this.setState({
        subpermisos_list: subpermisos_list || []
      });
    }).catch(err => {
      console.log('ERROR Listar subpermisos> ', err);
    });;
  }

  _handleClick() {
    const { actions_subpermisos } = this.props;

    actions_subpermisos.registrar({ 
      nombre: this.state.nombre,
      icono: this.state.icono
    }).then(() => {
      console.log('insert permiso ===>>=>==> ', this.props.permiso);

      this._notificationSystem.addNotification({
        message: 'Registrado exitosamente!',
        level: 'success',
        autoDismiss: 5
      });
    }).catch(err => {
      console.log('>>=>==> ', err);

      this._notificationSystem.addNotification({
        message: 'Error al registrar!',
        level: 'danger',
        autoDismiss: 5
      });
    });
  }

  _onChangeTextNombre(event) {
    this.setState({ 
      nombre: event.target.value 
    });
  }

  _onChangeTextIcono(event) {
    this.setState({ 
      icono: event.target.value 
    });
  }

  render() {
    const {subpermiso} = this.props;

    return (
      <form>
        <InsertarSubpermisoComponent
          onChangeTextNombre={this._onChangeTextNombre}
          onChangeTextIcono={this._onChangeTextIcono}
          subpermisos_list={this.state.subpermisos_list}
        />

        <button type="button" className="btn btn-primary" onClick={this._handleClick}>
          Regitrar
        </button>

        <NotificationSystem ref="notificationSystem" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    subpermiso: state.subpermiso,
    permiso: state.permiso
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions_subpermisos: bindActionCreators(SubpermisoActions, dispatch),
    actions_permisos: bindActionCreators(PermisosActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InsertarSubpermiso);
