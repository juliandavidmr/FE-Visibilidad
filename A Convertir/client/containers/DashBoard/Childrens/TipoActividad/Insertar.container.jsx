import React, { Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InsertarTipoActividadComponent from '../../../../components/Dashboard/Childrens/TipoActividad/InsertarTipoActividad.component.jsx';
import * as SubpermisoActions from '../../../../actions/subpermisos.js';
import * as PermisosActions from '../../../../actions/permisos.js';

import * as Notification from '../../../../components/MiniComponents/Notifications.js';

import NotificationSystem from 'react-notification-system';

class InsertarTipoActividad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      descripcion: ''
    };

    this._handleClick = this._handleClick.bind(this);
    this._onChangeText = this._onChangeText.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  /**
   * Recoge todos los datos que se escriben en el InsertarTipoActividadComponent
   * 
   * @param {any} data
   * 
   * @memberOf InsertarTipoActividad
   */
  _onChangeText(data) {
    this.setState(data);
  }

  _handleClick() {
    const { actions_subpermisos } = this.props;

    actions_subpermisos.registrar({
      nombre: this.state.nombre,
      icono: this.state.icono,
      url: this.state.url,
      id_permiso: Number.parseInt(this.state.id_permiso)
    }).then(() => {
      console.log('insert subpermiso ===>>=>==> ', this.props.subpermiso);

      this._notificationSystem.addNotification({
        message: 'Registrado exitosamente!',
        level: 'success',
        autoDismiss: 5
      });
    }).catch(err => {
      console.log('Error registrar >>=>==> ', err);

      this._notificationSystem.addNotification({
        message: 'Error al registrar!',
        level: 'danger',
        autoDismiss: 5
      });
    });
  }

  render() {
    return (
      <div>
        <InsertarTipoActividadComponent
          onSelectPermiso={this._onSelectPermiso}
          onClickRegistrar={this._handleClick}
          onChange={this._onChangeText}
          />

        <NotificationSystem ref="notificationSystem" />
      </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsertarTipoActividad);
