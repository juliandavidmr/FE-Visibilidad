import React, {Component, PropTypes} from 'react';

class ItemMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
      classNameActive: 'treeview',
      tree: []
    };

    this._handleClick = this._handleClick.bind(this);
    this._activeSubItem = this._activeSubItem.bind(this);
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

  /**
   * Este metodo aun no funciona, debe permitir seleccionar un item y cambiar el estado del string 
   * 
   * @param {any} item_select
   */
  _activeSubItem(item_select) {
    console.log("Click en item");

    let itemss = [];

    this.state.tree.map((item, i) => {
      if (item.text == item_select.text) {
        console.log("Item activado", item, item_select);
        item.active = 'active';
      } else {
        item.active = '';
      }
      itemss.push(item);
    });

    console.log(item_select);

    this.setState({
      tree: itemss
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
            this.state.tree? this.state.tree.map((item, i) => {
              return (
                <li key={i} onClick={ this._activeSubItem.bind(item.text) } className={item.active}>
                  <a href="javascript:void(0)">
                    <i className={item.icon}></i>
                    {item.text}
                  </a>
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