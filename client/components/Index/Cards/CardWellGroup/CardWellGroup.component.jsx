import React, {Component} from 'react';

export default class CardWellGroup extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			text: ''
		};

		this._handleClick = this._handleClick.bind(this);
		this._handleChangeText = this._handleChangeText.bind(this);
	}

	_handleClick(event) {
		console.log("Click", this);
	}

	_handleChangeText(event) {
		this.setState({ text: event.target.value });
		// console.log(event.target.value);
	}

	render() {
		const {title, icons, button, textarea} = this.props;

		return (
			<div className="well">
				<form className="form-horizontal" role="form">
					<h4>{title}</h4>

					<p>{this.state.text}</p>

					<div className="form-group" style={{
						padding: '14px'
					}}>
						<textarea className="form-control" placeholder={textarea.placeholder} onChange={this._handleChangeText}></textarea>
					</div>

					<button className="btn btn-success pull-right" type="button" onClick={this._handleClick}>{button.text}</button>

					<ul className="list-inline">
						{
							icons.map((icon, i) => {
								return (
									<li key={i}>
										<a href={icon.href}>
											<i className={icon.className}></i>
										</a>
									</li>
								);
							})
						}					
					</ul>
				</form>
			</div>
		);
	}
}

CardWellGroup.defaultProps = {
	title: 'Titulo CardWellGroup',
	icons: [
		{
			href: 'http://bootply.com/tagged/modal',
			className: 'glyphicon glyphicon-align-left'
		}, {
			href: 'http://www.google.com',
			className: 'glyphicon glyphicon-align-center'
		}, {
			href: 'http://bootply.com/tagged/datetime',
			className: 'glyphicon glyphicon-align-right'
		}
	],
	textarea: {
		placeholder: 'Update your status 2'
	},
	button: {
		text: 'Publicar'
	}
};

CardWellGroup.propTypes = {
	// autoPlay: React.PropTypes.bool.isRequired,
	// maxLoops: React.PropTypes.number.isRequired,
	// posterFrameSrc: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	icons: React.PropTypes.array.isRequired,
	button: React.PropTypes.any.isRequired
};
