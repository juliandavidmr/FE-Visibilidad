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
      permisos_list: [],
      id_permiso: -1
    };

    this._handleClick = this._handleClick.bind(this);
    this._onSelectPermiso = this._onSelectPermiso.bind(this);
    this._onChangeText = this._onChangeText.bind(this);
    this._onSubmit = this._onSubmit.bind(this);

    this.fetchPermisos = this.fetchPermisos.bind(this);
  }

  componentWillMount() {
    this.fetchPermisos();
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  fetchPermisos() {
    const { actions_permisos, permiso } = this.props;

    actions_permisos.listar().then(() => {
      this.setState({
        permisos_list: permiso.permiso.toJS().data_list_permisos || []
      });
    }).catch(err => {
      console.log('ERROR Listar subpermisos> ', err);
    });;
  }

  _onSubmit(e) {
    e.preventDefault();


  }

  /**
   * Recoge todos los datos que se escriben en el InsertarSubpermisoComponent
   * 
   * @param {any} data
   * 
   * @memberOf InsertarSubpermiso
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
      console.log('>>=>==> ', err);

      this._notificationSystem.addNotification({
        message: 'Error al registrar!',
        level: 'danger',
        autoDismiss: 5
      });
    });
  }

  _onSelectPermiso(event) {
    console.log('select: ', event.target.value);
    this.setState({
      id_permiso: event.target.value
    });
  }

  render() {
    const {subpermiso} = this.props;

    return (
      <form onSubmit={this._onSubmit}>
        <InsertarSubpermisoComponent
          onSelectPermiso={this._onSelectPermiso}
          permisos_list={this.state.permisos_list}
          onChange={this._onChangeText}
          onClick={
            <button type="submit" className="btn btn-primary" onClick={this._handleClick}>
              Regitrar
            </button>
          }
          />

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
