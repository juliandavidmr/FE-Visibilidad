/**
  Contenedor para Insertar un rol
*/

import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InsertarComponent from '../../../../components/Dashboard/Childrens/Rol/Insertar.component.jsx';
import * as RolActions from '../../../../actions/rol.js';

class InsertarRol extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descripcion: ''
    };

    this._handleClick = this._handleClick.bind(this);
    this._onChangeInput = this._onChangeInput.bind(this);
  }

  _handleClick() {
    console.log('Rgistrando');

    const { actions } = this.props;

    actions.registrar({ descripcion: this.state.descripcion }).then(() => {
      console.log('insert rol ===>>=>==> ', this.props.rol);
    }).catch(err => {
      console.log('>>=>==> ', err);
    });
  }

  _onChangeInput(event) {
    this.setState({
      descripcion: event.target.value
    });
  }

  render() {
    const { rol } = this.props;
    var data = 'data init';

    return (
      <div className="content-wrapper">
        <h1>rol</h1>
        <p>
          {
            JSON.stringify(rol)
          }
        </p>

        {
          this.state.descripcion
        }

        <InsertarComponent onChangeText={this._onChangeInput} />

        <button type="button" onClick={ this._handleClick }>Insertar</button>
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
)(InsertarRol);