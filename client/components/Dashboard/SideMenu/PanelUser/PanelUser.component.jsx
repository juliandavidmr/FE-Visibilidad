/**
 * Panel de usuario, muestra una descripcion corta del usuario logeado
 */

import React, {Component, PropTypes} from 'react';

class PanelUser extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { src, text, online } = this.props;
    
    return (
      <div>
        <div className="user-panel">
          <div className="pull-left image">
            <img src={src} className="img-circle" alt="User Image"/>
          </div>
          <div className="pull-left info">
            <p>{text}</p>
            <a href="javascript:void(0)">
              <i className="fa fa-circle text-success"></i>
              {
                 online? "Online" : "Offline"
              }
            </a>
          </div>
        </div>
      </div>
    );
  }
}

PanelUser.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default PanelUser;