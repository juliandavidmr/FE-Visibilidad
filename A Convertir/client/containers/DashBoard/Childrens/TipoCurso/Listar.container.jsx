/**
  Contenedor para listar roles
*/

import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListarTipoCursoComponent from '../../../../components/Dashboard/Childrens/TipoCurso/ListarTipoCurso.component.jsx';
import * as TipoCursoActions from '../../../../actions/tipocurso.js';

class ListarTipoCurso extends Component {
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
      console.log('list tiposcurso ===>>=>==> ', this.props.tipocurso.tipocurso.toJS());

      this.setState({
        tabla_datos: this.props.tipocurso.tipocurso.toJS().data_list_tipocurso,
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
                <h3 className="box-title">Cargando tipos de cursos</h3>
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

        <ListarTipoCursoComponent tabla_datos={this.state.tabla_datos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("Los state de rol:", state);

  return {
    tipocurso: state.tipocurso
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TipoCursoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListarTipoCurso);
