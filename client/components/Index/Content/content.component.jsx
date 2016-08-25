import React, {Component} from 'react';

import CardListGroup from '../Cards/CardListGroup/CardListGroup.component.jsx';
import CardWellGroup from '../Cards/CardWellGroup/CardWellGroup.component.jsx';
import CardPanel from '../Cards/CardPanel/CardPanel.component.jsx';
import CardPanelInput from '../Cards/CardPanelInput/CardPanelInput.component.jsx';

export default class Content extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className="container" id="main">
				<div className="row">
					<div className="col-md-4 col-sm-6">

            <CardListGroup linkUpHref="#" linkUpText="Ver todo" items={[{
							href: 'www.google.com',
							text: 'Google'
						}]} />

						<CardWellGroup title="Un Card Well" />
						<CardWellGroup title="Un Card Well 2" />

						<CardPanel title="Un Panel tipo Card" />

					</div>

					<div className="col-md-4 col-sm-6">
						
						<div className="well">
							<form className="form">
								<h4>Sign-up</h4>
								<div className="input-group text-center">
									<input type="text" className="form-control input-lg" placeholder="Enter your email address"/>
									<span className="input-group-btn">
										<button className="btn btn-lg btn-primary" type="button">OK</button>
									</span>
								</div>
							</form>
						</div>

						<CardPanel title="Otro panel Card" />

 						<CardListGroup title="Portlet Heading" linkUpHref="#" linkUpText="Ver todo" items={[{
							href: 'javascript:void(0)',
							text: 'Modals'
						}, {
							href: 'javascript:void(0)',
							text: 'Sliders / Carousel'
						}, {
							href: 'javascript:void(0)',
							text: 'Thumbnails'
						}]} />

					</div>

					<div className="col-md-4 col-sm-6">

					<CardListGroup title="Portlet Heading" linkUpHref="#" linkUpText="Ver todo" items={[{
							href: 'javascript:void(0)',
							text: 'Bootply Playground'
						}, {
							href: 'javascript:void(0)',
							text: 'Bootstrap Editor'
						}, {
							href: 'javascript:void(0)',
							text: 'Bootstrap Templates'
						}]} />

					<CardPanelInput title="Un panel con input" a={
							{
								text:'Ver todo', 
								href: '#Ver'
							}
						} img="//placehold.it/30x30" 
						subtitle={
							{
								text: 'Un subtitulo', 
								href: '#'
							}
						} 
						content="If you're looking for help with Bootstrap code, the <code>twitter-bootstrap</code> tag at <a href='http://stackoverflow.com/questions/tagged/twitter-bootstrap'>Stackoverflow</a>"/>

            <CardListGroup title="Otro Card list group" linkUpHref="#" linkUpText="Ver todo" items={[{
							href: 'www.google.com',
							text: 'Google'
						}, {
							href: 'www.hotmail.com',
							text: 'Hotmail'
						}]} />

					</div>

				</div>

				<hr/>

				<div className="row">
					<div className="col-md-12">
						<h2>Posts</h2>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="panel panel-default">
							<div className="panel-heading">
								<a href="#" className="pull-right">View all</a>
								<h4>Upgrade to Bootstrap 3</h4>
							</div>
							<div className="panel-body">
								<img src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=70" className="img-circle pull-right"/>
								<a href="#">Guidance and Tools</a>
								<div className="clearfix"></div>
								<hr/>
								<p>Migrating from Bootstrap 2.x to 3 is not a simple matter of swapping out the JS and CSS files. Bootstrap 3 is a major overhaul, and there are a lot of changes from Bootstrap 2.x.
									<a href="http://bootply.com/bootstrap-3-migration-guide">This guidance</a>
									is intended to help 2.x developers transition to 3.
								</p>
								<h5>
									<a href="http://google.com/+bootply">More on Upgrading from +Bootply</a>
								</h5>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="panel panel-default">
							<div className="panel-heading">
								<a href="#" className="pull-right">View all</a>
								<h4>Profiles</h4>
							</div>
							<div className="panel-body">
								Check out some of our member profiles..
								<hr/>
								<div className="well well-sm">
									<div className="media">
										<a className="thumbnail pull-left" href="#">
											<img className="media-object" src="http://www.gravatar.com/avatar/a13ac7aed64918b6354f48da59490e3a?s=70"/>
										</a>
										<div className="media-body">
											<h4 className="media-heading">Jose Kinsella</h4>
											<p>
												<span className="label label-info">10 photos</span>
												<span className="label label-primary">89 followers</span>
											</p>
											<p>
												<a href="#" className="btn btn-xs btn-default">
													<span className="glyphicon glyphicon-comment"></span>
													Message</a>
												<a href="#" className="btn btn-xs btn-default">
													<span className="glyphicon glyphicon-heart"></span>
													Favorite</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="panel panel-default">
							<div className="panel-heading">
								<a href="#" className="pull-right">View all</a>
								<h4>Inspiration</h4>
							</div>
							<div className="panel-body">
								<img src="//placehold.it/150" className="img-circle pull-right"/>
								<a href="#">Articles</a>
								<div className="clearfix"></div>
								<hr/>
								<div className="clearfix"></div>
								<img src="http://placehold.it/120x90/3333CC/FFF" className="img-responsive img-thumbnail pull-right"/>
								<p>The more powerful (and 100% fluid) Bootstrap 3 grid now comes in 4 sizes (or "breakpoints"). Tiny (for smartphones), Small (for tablets), Medium (for laptops) and Large (for laptops/desktops).</p>
								<div className="clearfix"></div>
								<hr/>
								<div className="clearfix"></div>
								<img src="http://placehold.it/120x90/33CC33/FFF" className="img-responsive img-thumbnail pull-left" style={{
									marginRight: '5px'
								}}/>
								<p>Mobile firstis a responsive Web design practice that prioritizes consideration of smart phones and mobile devices when creating Web pages.</p>

							</div>
						</div>
					</div>
				</div>

				<hr/>

				<div className="row">

					<div className="col-sm-4 col-xs-6">

						<div className="panel panel-default">
							<div className="panel-thumbnail">
								<img src="//placehold.it/450/EDEDED" className="img-responsive"/>
							</div>
							<div className="panel-body">
								<p className="lead">Hacker News</p>
								<p>
									120k Followers, 900 Posts</p>

								<p>
									<img src="https://lh4.googleusercontent.com/-eSs1F2O7N1A/AAAAAAAAAAI/AAAAAAAAAAA/caHwQFv2RqI/s28-c-k-no/photo.jpg" width="28px" height="28px"/>
									<img src="https://lh4.googleusercontent.com/-9Yw2jNffJlE/AAAAAAAAAAI/AAAAAAAAAAA/u3WcFXvK-g8/s28-c-k-no/photo.jpg" width="28px" height="28px"/>
								</p>
							</div>
						</div>

					</div>

					<div className="col-sm-4 col-xs-6">

						<div className="panel panel-default">
							<div className="panel-thumbnail"><img src="//placehold.it/450/DD66DD/FFF" className="img-responsive"/></div>
							<div className="panel-body">
								<p className="lead">Bootstrap Templates</p>
								<p>902 Followers, 88 Posts</p>

								<p>
									<img src="https://lh3.googleusercontent.com/uFp_tsTJboUY7kue5XAsGA=s28" width="28px" height="28px"/>
									<img src="https://lh5.googleusercontent.com/-AQznZjgfM3E/AAAAAAAAAAI/AAAAAAAAABA/WEPOnkQS_20/s28-c-k-no/photo.jpg" width="28px" height="28px"/>
								</p>
							</div>
						</div>

					</div>

					<div className="col-sm-4 col-xs-6">

						<div className="panel panel-default">
							<div className="panel-thumbnail"><img src="//placehold.it/450/2222CC/EEE" className="img-responsive"/></div>
							<div className="panel-body">
								<p className="lead">Social Media</p>
								<p>19k Followers, 789 Posts</p>
								<p>
									<img src="https://lh4.googleusercontent.com/-eSs1F2O7N1A/AAAAAAAAAAI/AAAAAAAAAAA/caHwQFv2RqI/s28-c-k-no/photo.jpg" width="28px" height="28px"/>
									<img src="https://lh4.googleusercontent.com/-9Yw2jNffJlE/AAAAAAAAAAI/AAAAAAAAAAA/u3WcFXvK-g8/s28-c-k-no/photo.jpg" width="28px" height="28px"/>
								</p>
							</div>
						</div>

					</div>

				</div>

				<div className="row">
					<div className="col-md-12">
						<h2>Playground</h2>
					</div>
					<div className="col-md-12">
						<div className="alert alert-info alert-dismissable">
							<button type="button" className="close" data-dismiss="alert" aria-hidden="true"></button>
							<strong>Heads up!</strong>
							This alert needs your attention, but it's not super important.
						</div>
					</div>
					<div className="col-md-6 col-sm-6">
						<div className="panel panel-default">
							<div className="panel-heading">
								<a href="#" className="pull-right">View all</a>
								<h4>Buttons &amp; Labels</h4>
							</div>
							<div className="panel-body">
								<div className="row">
									<div className="col-xs-4">
										<a className="btn btn-default center-block" href="#">Button</a>
									</div>
									<div className="col-xs-4">
										<a className="btn btn-primary center-block" href="#">Primary</a>
									</div>
									<div className="col-xs-4">
										<a className="btn btn-danger center-block" href="#">Danger</a>
									</div>
								</div>
								<br/>
								<div className="row">
									<div className="col-xs-4">
										<a className="btn btn-warning center-block" href="#">Warning</a>
									</div>
									<div className="col-xs-4">
										<a className="btn btn-info center-block" href="#">Info</a>
									</div>
									<div className="col-xs-4">
										<a className="btn btn-success center-block" href="#">Success</a>
									</div>
								</div>
								<hr/>
								<div className="btn-group btn-group-sm">
									<button className="btn btn-default">1</button>
									<button className="btn btn-default">2</button>
									<button className="btn btn-default">3</button>
								</div>
								<hr/>
								<div className="row">
									<div className="col-md-4">
										<span className="label label-default">Label</span>
										<span className="label label-success">Success</span>
									</div>
									<div className="col-md-4">
										<span className="label label-warning">Warning</span>
										<span className="label label-info">Info</span>
									</div>
									<div className="col-md-4">
										<span className="label label-danger">Danger</span>
										<span className="label label-primary">Primary</span>
									</div>
								</div>

							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-6">
						<div className="panel panel-default">
							<div className="panel-heading">
								<a href="#" className="pull-right">View all</a>
								<h4>Progress Bars</h4>
							</div>
							<div className="panel-body">

								<div className="progress">
									<div className="progress-bar progress-bar-info" style={{
										width: '20%'
									}}></div>
								</div>
								<div className="progress">
									<div className="progress-bar progress-bar-success" style={{
										width: '40%'
									}}></div>
								</div>
								<div className="progress">
									<div className="progress-bar progress-bar-warning" style={{
										width: '80%'
									}}></div>
								</div>
								<div className="progress">
									<div className="progress-bar progress-bar-danger" style={{
										width: '50%'
									}}></div>
								</div>

							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-6">
						<div className="panel panel-default">
							<div className="panel-heading">
								<a href="#" className="pull-right">View all</a>
								<h4>Tabs</h4>
							</div>
							<div className="panel-body">

								<ul className="nav nav-tabs">
									<li className="active">
										<a href="#A" data-toggle="tab">Section 1</a>
									</li>
									<li>
										<a href="#B" data-toggle="tab">Section 2</a>
									</li>
									<li>
										<a href="#C" data-toggle="tab">Section 3</a>
									</li>
								</ul>
								<div className="tabbable">
									<div className="tab-content">
										<div className="tab-pane active" id="A">
											<div className="well well-sm">I'm in Section A.</div>
										</div>
										<div className="tab-pane" id="B">
											<div className="well well-sm">Howdy, I'm in Section B.</div>
										</div>
										<div className="tab-pane" id="C">
											<div className="well well-sm">I've decided that I like wells.</div>
										</div>
									</div>
								</div>

								<div className="col-sm-12 text-center">
									<ul className="pagination center-block" style={{
										display: 'inline-block'
									}}>
										<li>
											<a href="#">
												<i className="glyphicon glyphicon-chevron-left"></i>
											</a>
										</li>
										<li>
											<a href="#">1</a>
										</li>
										<li>
											<a href="#">2</a>
										</li>
										<li>
											<a href="#">3</a>
										</li>
										<li>
											<a href="#">4</a>
										</li>
										<li>
											<a href="#">5</a>
										</li>
										<li>
											<a href="#">
												<i className="glyphicon glyphicon-chevron-right"></i>
											</a>
										</li>
									</ul>
								</div>

							</div>
						</div>
					</div>

					<br/>

					<div className="clearfix"></div>

					<hr/>
					<div className="col-md-12 text-center">
						<p>
							<a href="http://www.bootply.com/download/90113" target="_ext">Download Google Plus Style Template</a>
							<br/>
							<a href="http://bootply.com/templates" target="_ext">More Bootstrap Templates by @Bootply</a>
						</p>
					</div>
					<hr/>

				</div>

			</div>
		)
	}
}
