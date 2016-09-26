import React, {Component, PropTypes} from 'react';

export default class Nivel extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="content-wrapper">
				<section className="content">
					{
            this.props.children
          }
				</section>
			</div>
		);
	}
}
