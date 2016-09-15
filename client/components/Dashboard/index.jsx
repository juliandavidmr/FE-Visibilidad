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
      <div>
        <link rel="stylesheet" href="/assets/js/plugins/jvectormap/jquery-jvectormap-1.2.2.css"/>
        <link rel="stylesheet" href="/assets/css/AdminLTE.min.css"/>
        <link rel="stylesheet" href="/assets/css/skins/_all-skins.min.css"/>

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
      </div>
    );
  }
}

DashBoardComponent.propTypes = {
  User: PropTypes.any
};
