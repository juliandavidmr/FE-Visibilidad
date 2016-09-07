import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IndexComponent from '../../components/Index';
import * as SemilleroActions from '../../actions/semilleros';
import './style.css';

class Index extends Component {

  componentWillMount() {
    const { actions } = this.props;
    console.log('fetchSemilleros=>', actions.fetchSemilleros());
  }

  render() {
    const { semilleros, actions } = this.props;

    return <IndexComponent />;
  }
}

function mapStateToProps(state) {
  // console.log("mapStateToProps: ", state);
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
