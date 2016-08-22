import React, {Component, PropTypes} from 'react';

class Input extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: '',
      isRequired: false
    };

    this._handleChangeText = this._handleChangeText.bind(this);
  }

  componentWillMount () {

  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  shouldComponentUpdate (nextProps, nextState) {

  }

  componentWillUpdate (nextProps, nextState) {

  }

  componentDidUpdate (prevProps, prevState) {

  }

  componentWillUnmount () {

  }

  _handleChangeText(event) {
    if (this.state.isRequired) {

    } else {

    }
  }

  render () {
    const {type, className, placeholder, value, isRequired} = this.props;

 /*   this.setState({
      isRequired: isRequired
    });
*/
    if(type.toLowerCase() === 'textarea') {
      return <textarea className={className} placeholder={placeholder} onChange={this._handleChangeText}></textarea>;
    } else {
      return <input type={type} className={className} placeholder={placeholder} value={value} onChange={this._handleChangeText} />;
    }
  }
}

Input.defaultProps = {
  value: ''
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
  //isRequired: PropTypes.boolean.isRequired
};

export default Input;