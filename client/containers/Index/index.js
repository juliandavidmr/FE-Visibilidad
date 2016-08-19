import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { IndexLink } from 'react-router'
import IndexComponent from '../../components/Index'
import * as TodoActions from '../../actions/todos'
import './style.css'

class Index extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
      <div>
        <IndexComponent />
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
