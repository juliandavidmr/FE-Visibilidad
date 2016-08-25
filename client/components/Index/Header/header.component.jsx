import React, {Component} from 'react';

export default class Header extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			autenticado: false,
			notificaciones: [{
				href: '#',
				badge: 40,
				text: 'link1',
				className: 'badge pull-right'
			}, {
				href: '#',
				badge: 40,
				text: 'link2',
				className: 'badge pull-right'
			}, {
				href: '#',
				badge: 33,
				text: 'link3',
				className: 'label label-info pull-right'
			}],
			buttonSelect: [{
				classIcon: 'glyphicon glyphicon-home',
				href: '#',
				text: 'Perfil',
				style: { color: '#1111dd' },
				divider: false
			}, {
				classIcon: 'glyphicon glyphicon-dashboard',
				href: '#',
				text: 'Dashboard',
				style: { color: '#0000aa' },
				divider: false
			}, {
				classIcon: 'glyphicon glyphicon-inbox',
				href: '#',
				text: 'Paginas',
				style: { color: '#11dd11' },
				divider: true
			}]
		};
	}	

	render() {
		return (
			<div>
				<nav className="navbar navbar-fixed-top header">
					<div className="col-md-12">
						<div className="navbar-header">

							<a href="#" className="navbar-brand">Bootstrap</a>
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse1">
								<i className="glyphicon glyphicon-search"></i>
							</button>

						</div>
						<div className="collapse navbar-collapse" id="navbar-collapse1">
							<form className="navbar-form pull-left">
								<div className="input-group" style={{
									maxwidth: 470
								}}>
									<input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term"/>
									<div className="input-group-btn">
										<button className="btn btn-default btn-primary" type="submit">
											<i className="glyphicon glyphicon-search"></i>
										</button>
									</div>
								</div>
							</form>
							<ul className="nav navbar-nav navbar-right">
								<li>
									<a href="http://www.bootply.com" target="_ext">Bootply+</a>
								</li>
								<li>
									<a href="#" className="dropdown-toggle" data-toggle="dropdown">
										<i className="glyphicon glyphicon-bell"></i>
									</a>
									<ul className="dropdown-menu">
										{
											this.state.notificaciones.map((item, i) => {
												return (
													<li key={i}>
														<a href={item.href}>
															<span className={item.className}>
																{item.badge}
															</span>
															{item.text}
														</a>
													</li>
												);
											})
										}
									</ul>
								</li>
								<li>
									<a href="#" id="btnToggle">
										<i className="glyphicon glyphicon-th-large"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="glyphicon glyphicon-user"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div className="navbar navbar-default" id="subnav">
					<div className="col-md-12">
						<div className="navbar-header">


							<a href="#" style={{ marginLeft: '15px'	}} className="navbar-btn btn btn-default btn-plus dropdown-toggle" data-toggle="dropdown">
								<i className="glyphicon glyphicon-home" style={{ color: '#dd1111'	}}></i>
								Home
								<small>
									<i className="glyphicon glyphicon-chevron-down"></i>
								</small>
							</a>
							<ul className="nav dropdown-menu">
								{
									this.state.buttonSelect.map((item, i) => {
										var divider = '';
										if (item.divider) {
											divider = <li className="nav-divider"></li>;																						
										}

										return (											
											<li key={i}>
												<a href={item.href}>
													<i className={item.classIcon} style={item.style}></i>
													{item.text}
												</a>
											</li>
										);
									})
								}

								<li className="nav-divider"></li>
								
								<li>
									<a href="#">
										<i className="glyphicon glyphicon-cog" style={{
											color: '#dd1111'
										}}></i>
										Settings</a>
								</li>
								<li>
									<a href="#">
										<i className="glyphicon glyphicon-plus"></i>
										More..</a>
								</li>
							</ul>

							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse2">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>

						</div>
						<div className="collapse navbar-collapse" id="navbar-collapse2">
							<ul className="nav navbar-nav navbar-right">
								<li className="active">
									<a href="#">Posts</a>
								</li>
								<li>
									<a href="#loginModal" role="button" data-toggle="modal">Login</a>
								</li>
								<li>
									<a href="#aboutModal" role="button" data-toggle="modal">About</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		);
	}
}
