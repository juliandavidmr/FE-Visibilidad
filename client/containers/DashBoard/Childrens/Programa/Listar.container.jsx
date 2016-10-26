/**
  Contenedor para listar programas
*/

import React, { Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListarProgramasComponent from '../../../../components/Dashboard/Childrens/Programa/ListarPrograma.component.jsx';
import * as ProgramaActions from '../../../../actions/programa.js';

class ListarPrograma extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tabla_datos: [],
      cargando: true
    };
  }

  componentWillMount() {
    const { actions } = this.props;

    actions.listar().then(() => {
      console.log('list programas ===>>=>==> ', this.props.programa.programa.toJS());

      this.setState({
        tabla_datos: this.props.programa.programa.toJS().data_list_programas,
        cargando: false
      });
    }).catch(err => {
      console.log('ERROR> ', err);
    });
  }

  render() {
    return (
      <div>
        {
          this.state.cargando ? <div className="col-md-3">
            <div className="box box-danger">
              <div className="box-header">
                <h3 className="box-title">Cargando programas</h3>
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

        <ListarProgramasComponent tabla_datos={this.state.tabla_datos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    programa: state.programa
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ProgramaActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListarPrograma);