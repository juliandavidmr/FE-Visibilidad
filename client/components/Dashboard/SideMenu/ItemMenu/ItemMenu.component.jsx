import React, {Component, PropTypes} from 'react';

import { Link } from 'react-router';

class ItemMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
      classNameActive: 'treeview',
      tree: []
    };

    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      tree: this.props.tree
    });
  }

  _handleClick() {
    console.log("Click");

    var aux_class = '';
    if (this.state.active) {
      aux_class = "active treeview";
    } else {
      aux_class = "treeview";
    }

    this.setState({
      active: !this.state.active,
      classNameActive: aux_class
    });
  }

  render() {
    const { title, icon, span } = this.props;

    return (
      <li className={this.state.classNameActive}>
        <a href="#" onClick={ this._handleClick }>
          <i className={icon}></i>
          <span>{title}</span>
          <i className="fa fa-angle-left pull-right"></i>

          {
            (span) ? <span className={span.className}>{span.text}</span> : ''
          }

        </a>
        <ul className="treeview-menu">
          {
            this.state.tree ? this.state.tree.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={item.href} activeClassName="active">
                    <i className={item.icon}></i>
                    {item.text}
                  </Link>
                </li>
              );
            }) : ''
          }
        </ul>
      </li>
    );
  }
}

ItemMenu.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  span: PropTypes.any,
};

export default ItemMenu;