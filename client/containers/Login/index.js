import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginComponent from '../../components/Login/Login.component.jsx';
import * as LoginActions from '../../actions/login';

class Login extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    const { login, actions } = this.props;

    // this.props.login();

    return (
      <div>
        <h1>Login</h1>
        <p>
          {
            JSON.stringify(login)
          }
        </p>
        
        <button onClick={() => actions.login({email: 'elemail@hotmail.com', password: '321123'})}>Click</button>
        <LoginComponent />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("Los state de login:", state);
  return {
    login: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);