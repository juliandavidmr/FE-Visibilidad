/**
  Contenedor para listar niveles
*/

import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListarNivelesComponent from '../../../../components/Dashboard/Childrens/Nivel/Listar.component.jsx';
import * as NivelActions from '../../../../actions/nivel';

class ListarNiveles extends Component {
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
      console.log('list Niveles ===>>=>==> ', this.props.nivel.nivel.toJS());

      this.setState({
        tabla_datos: this.props.nivel.nivel.toJS().data_list_nivel,
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
                <h3 className="box-title">Cargando Niveles</h3>
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

        <ListarNivelesComponent tabla_datos={this.state.tabla_datos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("Los state de rol:", state);

  return {
    nivel: state.nivel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NivelActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListarNiveles);
