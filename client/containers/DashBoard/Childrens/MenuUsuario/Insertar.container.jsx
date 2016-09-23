import React, { Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InsertarMenuUsuarioComponent from '../../../../components/Dashboard/Childrens/MenuUsuario/InsertarMenuUsuario.component.jsx';
import * as SubpermisoActions from '../../../../actions/subpermisos.js';
import * as RolActions from '../../../../actions/rol.js';

import * as Notification from '../../../../components/MiniComponents/Notifications.js';

import NotificationSystem from 'react-notification-system';

class InsertarMenuUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subpermisos_list: [],
      roles_list: [],
      id_subpermiso: -1,
      id_rol: -1
    };

    this._handleClick = this._handleClick.bind(this);
    this._onChangeText = this._onChangeText.bind(this);

    this.fetchSubPermisos = this.fetchSubPermisos.bind(this);
    this.fetchRoles = this.fetchRoles.bind(this);

    this.fetchSubPermisos();
    this.fetchRoles();
  }

  componentWillMount() {

  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  /**
   * Consultar json de subpermisos
   * 
   * @memberOf InsertarMenuUsuario
   */
  fetchSubPermisos() {
    const { actions_subpermisos, subpermiso } = this.props;

    actions_subpermisos.listar().then(() => {
      this.setState({
        subpermisos_list: subpermiso.subpermiso.toJS().data_list_permisos || []
      });
    }).catch(err => {
      console.log('ERROR Listar subpermisos> ', err);
    });
  }
  
  fetchRoles() {
    const { actions_rol, rol } = this.props;

    actions_rol.listar().then(() => {
      this.setState({
        roles_list: rol.rol.toJS().data_list_rol || []
      });
    }).catch(err => {
      console.log('ERROR Listar roles> ', err);
    });
  }


  /**
   * Recoge todos los datos que se escriben en el InsertarMenuUsuarioComponent
   * 
   * @param {any} data
   * 
   * @memberOf InsertarMenuUsuario
   */
  _onChangeText(data) {
    this.setState(data);
  }

  _handleClick() {
    const { actions_subpermisos } = this.props;

    actions_subpermisos.registrar({
      id_subpermiso: Number.parseInt(this.state.id_subpermiso),
      id_rol: Number.parseInt(this.state.id_rol)
    }).then(() => {
      console.log('insert menuusuario ==>>=>==> ', this.props.subpermiso);

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
        <InsertarMenuUsuarioComponent
          onSelectPermiso={this._onSelectPermiso}
          onClickRegistrar={this._handleClick}
          subpermisos_list={this.state.subpermisos_list}
          roles_list={this.state.roles_list}
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
    rol: state.rol
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions_subpermisos: bindActionCreators(SubpermisoActions, dispatch),
    actions_rol: bindActionCreators(RolActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsertarMenuUsuario);