import React, {Component, PropTypes} from 'react';

import Input from '../../../MiniComponents/Input.component.jsx';

class CardPanelInput extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    const {title, a, img, subtitle, content} = this.props;

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <a href={a.href} className="pull-right">{a.text}</a>
            <h4>{title}</h4>
          </div>
          <div className="panel-body">
            <img src={img} className="img-circle pull-right"/>
            <a href={subtitle.href}>{subtitle.text}</a>
            <div className="clearfix"></div>

            <hr/>

            <p>
              {content}
            </p>

            <hr/>
            <form>
              <div className="input-group">
                <div className="input-group-btn">
                  <button className="btn btn-default">+1</button>
                  <button className="btn btn-default">
                    <i className="glyphicon glyphicon-share"></i>
                  </button>
                </div>

                <Input type="text" className="form-control" placeholder="Add a comment.." isRequired={false}/>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

CardPanelInput.defaultProps = {

};

CardPanelInput.propTypes = {
  title: PropTypes.string.isRequired,
  a: PropTypes.any.isRequired,
  img: PropTypes.string.isRequired,
  subtitle: PropTypes.any.isRequired,
  content: PropTypes.string.isRequired
};

export default CardPanelInput;