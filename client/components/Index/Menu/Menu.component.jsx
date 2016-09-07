import React, {Component, PropTypes} from 'react';

import { Link } from 'react-router';

class MenuComponent extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const { titulo, menu } = this.props;

		return (
			<div>
				<section id="mu-menu">
					<nav className="navbar navbar-default" role="navigation">
						<div className="container">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>

								<a className="navbar-brand" href="index.html">
									<i className="fa fa-university"></i>
									<span>
										{
											titulo
										}
									</span>
								</a>
							</div>
							<div id="navbar" className="navbar-collapse collapse">
								<ul id="top-menu" className="nav navbar-nav navbar-right main-nav">
									<li>
										<Link to="/index" activeClassName="active">Principal</Link>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Noticias
											<span className="fa fa-angle-down"></span>
										</a>
										<ul className="dropdown-menu" role="menu">
											<li>
												<a href="/eventos/recientes">Recientes</a>
											</li>
											<li>
												<a href="/eventos/categorias">Categorias</a>
											</li>
										</ul>
									</li>
									<li>
										<Link to="/eventos" activeClassName="active">Eventos</Link>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog
											<span className="fa fa-angle-down"></span>
										</a>
										<ul className="dropdown-menu" role="menu">
											<li>
												<a href="blog-archive.html">Blog Archive</a>
											</li>
											<li>
												<a href="blog-single.html">Blog Single</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="/contacto">Contacto</a>
									</li>
									<li>
										<a href="/dasdsasdf">404 Page</a>
									</li>
									<li>
										<a href="#" id="mu-search-icon">
											<i className="fa fa-search"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</section>
				<div id="mu-search">
					<div className="mu-search-area">
						<button className="mu-search-close">
							<span className="fa fa-close"></span>
						</button>
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<form className="mu-search-form">
										<input type="search" placeholder="Type Your Keyword(s) & Hit Enter"/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

MenuComponent.propTypes = {
	titulo: PropTypes.string.isRequired,
	menu: PropTypes.array
};

export default MenuComponent;
