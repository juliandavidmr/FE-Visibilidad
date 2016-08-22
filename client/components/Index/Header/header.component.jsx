import React, {Component} from 'react'

export default class Header extends Component {
	constructor(props, context) {
		super(props, context);

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
										<li>
											<a href="#">
												<span className="badge pull-right">40</span>Link</a>
										</li>
										<li>
											<a href="#">
												<span className="badge pull-right">2</span>Link</a>
										</li>
										<li>
											<a href="#">
												<span className="badge pull-right">0</span>Link</a>
										</li>
										<li>
											<a href="#">
												<span className="label label-info pull-right">1</span>Link</a>
										</li>
										<li>
											<a href="#">
												<span className="badge pull-right">13</span>Link</a>
										</li>
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

							<a href="#" style={{
								marginLeft: '15px'
							}} className="navbar-btn btn btn-default btn-plus dropdown-toggle" data-toggle="dropdown">
								<i className="glyphicon glyphicon-home" style={{
									color: '#dd1111'
								}}></i>
								Home
								<small>
									<i className="glyphicon glyphicon-chevron-down"></i>
								</small>
							</a>
							<ul className="nav dropdown-menu">
								<li>
									<a href="#">
										<i className="glyphicon glyphicon-user" style={{
											color: '#1111dd'
										}}></i>
										Profile</a>
								</li>
								<li>
									<a href="#">
										<i className="glyphicon glyphicon-dashboard" style={{
											color: '#0000aa'
										}}></i>
										Dashboard</a>
								</li>
								<li>
									<a href="#">
										<i className="glyphicon glyphicon-inbox" style={{
											color: '#11dd11'
										}}></i>
										Pages</a>
								</li>
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
		)
	}
}
