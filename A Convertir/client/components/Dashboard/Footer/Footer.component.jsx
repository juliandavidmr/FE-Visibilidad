import React, {PropTypes} from 'react'

class Footer extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b>
            2.3.0
          </div>
          <strong>Copyright &copy; 2014-2015
            <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong>
          All rights reserved.
        </footer>
      </div>
    );
  }
}

export default Footer;
