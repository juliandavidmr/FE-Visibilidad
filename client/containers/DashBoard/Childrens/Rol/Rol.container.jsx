/**
  Contenedor de prueba
*/
import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListarRolesComponent from '../../../../components/Dashboard/Childrens/Rol/ListarRoles.component.jsx';
import * as RolActions from '../../../../actions/rol.js';

class Rol extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  _handleClick() {
    const { actions } = this.props;

    actions.listar().then(() => {
      console.log('list roles ===>>=>==> ', this.props.rol);
    }).catch(err => {
      console.log('>>=>==> ', err);
    });
  }

  render() {
    const { rol } = this.props;

    return (
      <div className="content-wrapper">
        <h1>rol</h1>
        <p>
          {
            JSON.stringify(rol)
          }
        </p>
        
        <button onClick={this._handleClick.bind(this)}>Click</button>
        <ListarRolesComponent />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("Los state de rol:", state);

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
)(Rol);