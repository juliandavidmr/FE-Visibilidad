/**
  Contenedor para listar roles
*/

import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListarSubpermisosComponent from '../../../../components/Dashboard/Childrens/Subpermiso/ListarSubpermisos.component.jsx';
import * as SubpermisoActions from '../../../../actions/subpermisos.js';

class ListarSubpermisos extends Component {
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
      console.log('list subpermisos ===>>=>==> ', this.props.subpermisos.subpermisos.toJS());

      this.setState({
        tabla_datos: this.props.subpermisos.subpermisos.toJS().data_list_subpermisos,
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
                <h3 className="box-title">Cargando subpermisos</h3>
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

        <ListarSubpermisosComponent tabla_datos={this.state.tabla_datos} />
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    subpermisos: state.subpermisos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SubpermisoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListarSubpermisos);
