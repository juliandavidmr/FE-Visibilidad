import React, {Component, PropTypes} from 'react';

import PanelUser from './PanelUser/PanelUser.component.jsx';
import Menu from './Menu/Menu.component.jsx';

class SideMenu extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <aside className="main-sidebar">

        <section className="sidebar">

          <PanelUser
            src="/assets/img/user2-160x160.jpg"
            text="Usuario XYS"
            online={true}
          />

          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>

          <Menu/>

        </section>

      </aside>
    );
  }

}

SideMenu.propTypes = {};

export default SideMenu;
