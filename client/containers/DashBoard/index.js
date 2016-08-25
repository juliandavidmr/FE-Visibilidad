import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DashBoardComponent from '../../components/Dashboard';
import * as DashBoardActions from '../../actions/dashboard';

class DashBoard extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>DashBoard</h1>
        <DashBoardComponent User={{email: 'anlijudavid@hotmail.com', rol: 'admin'}} />
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