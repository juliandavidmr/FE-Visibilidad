import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DashBoardComponent from '../../components/Dashboard';
import * as DashBoardActions from '../../actions/dashboard';
// import thunkMiddleware from 'redux-thunk';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isAuth: false // está autenticado?
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    const { dashboard, actions } = this.props;
    
    // actions.signin;

    return (
      <div>
        <h1>DashBoard</h1>
        <p>
          {
            JSON.stringify(dashboard)
          }
        </p>
        <button onClick={actions.signin}>Click</button>
        <DashBoardComponent User={{ email: 'anlijudavid@hotmail.com', rol: 'admin' }} />
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