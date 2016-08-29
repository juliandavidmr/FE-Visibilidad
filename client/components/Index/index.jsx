import React, { Component } from 'react';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters';

import Header from './Header/header.component.jsx';
import Content from './Content/content.component.jsx';

export default class IndexComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  render() {
    const { semilleros, actions, children } = this.props;

    return (
      <div>
        <Header />
        <Content />
        {
          semilleros.map((item, i) => {
            return <h1 key={item.id}>{item.msg}</h1>;
          })
        }
        {children}
      </div>
    );
  }
}
