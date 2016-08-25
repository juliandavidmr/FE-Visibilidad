
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IndexLink, NavLink } from 'react-router';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import * as TodoActions from '../../actions/todos';
import style from './style.css';

class App extends Component {
  render() {
    const { todos, actions, children } = this.props;
    
    return (
      <div className={style.normal}>
        <li><IndexLink to="/index">Home</IndexLink></li>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
        {children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
