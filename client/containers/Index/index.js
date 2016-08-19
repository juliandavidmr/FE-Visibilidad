import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IndexComponent from '../../components/Index'
import * as SemilleroActions from '../../actions/semilleros'
import './style.css'

class Index extends Component {
  render() {
    const { semilleros, actions, children } = this.props
    return (
      <div>
        <IndexComponent semilleros={semilleros} />

        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps: ", state);
  return {
    semilleros: state.semilleros
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SemilleroActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
