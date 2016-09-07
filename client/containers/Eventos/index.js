import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import EventosComponent from '../../components/Eventos/Eventos.component.jsx';

import * as SemilleroActions from '../../actions/semilleros';

class Index extends Component {
  render() {
    return (
      <div>
        <EventosComponent />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    semilleros: state.semilleros
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SemilleroActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);