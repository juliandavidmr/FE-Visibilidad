/**
  Contenedor para Insertar un permiso
*/

import React, { Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InsertarComponent from '../../../../components/Dashboard/Childrens/Permiso/InsertarPermiso.component.jsx';
import * as PermisoActions from '../../../../actions/permisos.js';

import * as Notification from '../../../../components/MiniComponents/Notifications.js';

import NotificationSystem from 'react-notification-system';

class InsertarPermiso extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      icono: ''
    };

    this._handleClick = this._handleClick.bind(this);
    this._onChangeTextNombre = this._onChangeTextNombre.bind(this);
    this._onChangeTextIcono = this._onChangeTextIcono.bind(this);
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  _handleClick() {
    const { actions } = this.props;

    actions.registrar({ 
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
    const {permiso} = this.props;

    return (
      <form>
        <InsertarComponent
          onChangeTextNombre={this._onChangeTextNombre}
          onChangeTextIcono={this._onChangeTextIcono}
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
    permiso: state.permiso
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PermisoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InsertarPermiso);
