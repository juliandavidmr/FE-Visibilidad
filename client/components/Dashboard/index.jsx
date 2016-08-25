import React, {Component, PropTypes} from 'react';

import Content from './Content/Content.component.jsx';
import SideMenu from './SideMenu/Sidemenu.componet.jsx';

export default class DashBoardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      User: this.props.User
    };
  }

  render() {
    const { actions } = this.props;

    return (
      <div>
        <br/>
        <h1>DashBoard Component</h1>
        <SideMenu />
        <Content />        
      </div>
    );
  }
}

DashBoardComponent.propTypes = {
  User: PropTypes.any.isRequired
};