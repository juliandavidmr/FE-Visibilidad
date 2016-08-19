import React, { Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'

import Header from './Header/header.component.jsx';

export default class IndexComponent extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { filter: SHOW_ALL }
  }

  render() {
    const { todos, actions, children } = this.props

    return (
      <div>
        <Header />
        {children}        
      </div>
    )
  }
}
