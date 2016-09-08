/**
  Contenedor para listar roles
*/

import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListarRolesComponent from '../../../../components/Dashboard/Childrens/Rol/ListarRoles.component.jsx';
import * as RolActions from '../../../../actions/rol.js';

class ListarRoles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabla_datos: []
    };
  }

  // Antes de renderizar el componente
  componentWillMount() {
    const { actions } = this.props;

    actions.listar().then(() => {
      console.log('list roles ===>>=>==> ', this.props.rol.rol);

      this.setState({
        tabla_datos: JSON.parse(JSON.stringify(this.props.rol.rol.get('data_list_roles').toArray()))
      });
    }).catch(err => {
      console.log('ERROR> ', err);
    });
  }

  componentDidMount() {
  }

  render() {
    const { rol } = this.props;

    return (
      <ListarRolesComponent tabla_datos={this.state.tabla_datos} />
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
