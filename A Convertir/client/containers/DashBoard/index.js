import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DashBoardComponent from '../../components/Dashboard';
import * as DashBoardActions from '../../actions/dashboard';

class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false // está autenticado?
    };
  }

  render() {
    const { dashboard, actions } = this.props;

    return (
      <div>
        <DashBoardComponent User={{ email: 'anlijudavid@hotmail.com', rol: 'admin' }} />

        {
          this.props.children
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DashBoardActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
