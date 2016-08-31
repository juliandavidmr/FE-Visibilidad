import React, {Component, PropTypes} from 'react';

import NavBar from './NavBar/NavBar.component.jsx';
import Content from './Content/Content.component.jsx';
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
    const {actions} = this.props;

    const stylesUrl = {};

    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
        <link rel="stylesheet" href="/assets/js/plugins/jvectormap/jquery-jvectormap-1.2.2.css"/>
        <link rel="stylesheet" href="/assets/css/AdminLTE.min.css"/>
        <link rel="stylesheet" href="/assets/css/skins/_all-skins.min.css"/>

        <div className="hold-transition skin-blue sidebar-mini">
          <div className="wrapper">
            <NavBar/>
            <SideMenu/>
            <Content/>
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
