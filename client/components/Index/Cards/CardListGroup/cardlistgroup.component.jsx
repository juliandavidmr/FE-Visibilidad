import React, {Component} from 'react';

export default class CardListGroup extends Component {

	constructor(props, context) {
		super(props, context);
	}

	
  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

	render() {
		const {linkUpHref, linkUpText, title, items} = this.props;

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<a href={linkUpHref} className="pull-right">{linkUpText}</a>
					<h4>{title}</h4>
				</div>
				<div className="panel-body">
					<div className="list-group">
						{
							items.map((item, i) => {
								return <a key={i} href={item.href} className="list-group-item">{item.text}</a>;
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

CardListGroup.defaultProps = {
	linkUpHref: "#",
	linkUpText: 'View All1',
	title: 'Titulo CardListGroup',
	items: [{
		href: 'http://bootply.com/tagged/modal',
		text: 'Modal / Dialog'
	}, {
			href: 'http://bootply.com/tagged/datetime',
			text: 'Datetime Examples'
	}]
};

CardListGroup.propTypes = {
	// autoPlay: React.PropTypes.bool.isRequired,
	// maxLoops: React.PropTypes.number.isRequired,
	// posterFrameSrc: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	linkUpHref: React.PropTypes.string.isRequired,
	items: React.PropTypes.array.isRequired
};

/**
PropTypes:

string
number
boolean
function
object
shape
oneOf
instanceOf
array
arrayOf
node
element
any
required

 */