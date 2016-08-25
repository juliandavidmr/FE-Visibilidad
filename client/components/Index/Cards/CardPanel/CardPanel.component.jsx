import React, {Component} from 'react';

class CardPanel extends Component {

  constructor(props, context) {
    super(props, context);

  }

  render () {
    const {title, linkUpHref, linkUpText, content, img} = this.props;

    return (      
      <div className="panel panel-default">
        <div className="panel-heading">
          <a href={linkUpHref} className="pull-right">{linkUpText}</a>
          <h4>{title}</h4>
        </div>
        <div className="panel-body">
          <img src={img} className="img-circle pull-right"/>
          <a href={content.a.href}>{content.a.text}</a>
          <div className="clearfix"></div>
            {content.text}
          <hr />
          <ul className="list-unstyled">
            {
              content.links.map((link, i) => {
                return (
                  <li key={i}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

CardPanel.defaultProps = {
  title: 'Card Panel',
  linkUpHref: "#",
	linkUpText: 'Ver todo',
  img: '//placehold.it/150x150',
  content: {
    a: {
      href: '#',
      text: 'Un subtitulo'
    },
    text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    links: [{
      href: 'http://www.bootply.com/templates',
      text: 'Dashboard'
    }, {
      href: 'http://www.bootply.com/templates',
      text: 'Menú'
    }, {
      href: 'http://www.bootply.com/templates',
      text: 'Acerca de'
    }]
  }
};

CardPanel.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default CardPanel;