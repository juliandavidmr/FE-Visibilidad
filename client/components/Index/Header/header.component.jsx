import React, {Component} from 'react';

class HeaderComponent extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const { socials } = this.props;

		return (
			<header id="mu-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="mu-header-area">
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
										<div className="mu-header-top-right">
											<nav>
												<ul className="mu-top-social-nav">
													{
														socials.map((item, i) => {
															return (
																<li key={i}>
																	<a href={item.link}>
																		<span className={item.class}></span>
																	</a>
																</li>
															);
														})
													}												
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}


HeaderComponent.propTypes = {

};

export default HeaderComponent;
