import React, {Component, PropTypes} from 'react';

import NavBar from './NavBar/NavBar.component.jsx';
import SideMenu from './SideMenu/Sidemenu.component.jsx';
import Footer from './Footer/Footer.component.jsx';

export default class DashBoardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      User: this.props.User
    };
  }

  render() {
    const {actions, children} = this.props;

    return (
      <div className="hold-transition skin-blue sidebar-mini">
        <div className="wrapper">
          <NavBar/>
          <SideMenu/>

          {
            children
          }

          <Footer />
        </div>
      </div>
    );
  }
}

DashBoardComponent.propTypes = {
  User: PropTypes.any
};
