import React, {Component, PropTypes} from 'react';

import HeaderComponent from './Header/Header.component.jsx';
import MenuComponent from './Menu/Menu.component.jsx';
import SliderComponent from './Slider/Slider.component.jsx';

class IndexComponent extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
				<a className="scrollToTop" href="#">
					<i className="fa fa-angle-up"></i>
				</a>

				<HeaderComponent/>

				<MenuComponent/>

				<SliderComponent slides={[
          {
            id: 1,
            img: 'assets/assets/img/slider/1.jpg',
            titulo: 'Titulo de prueba',
            resumen: 'un resumen cualqueira',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            link: 'in link'
          }, {
            id: 2,
            img: 'assets/assets/img/slider/2.jpg',
            titulo: 'Titulo de prueba 2',
            resumen: 'un resumen cualqueira2',
            descripcion: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            link: 'in lin22222k'
          }
        ]}/>

				<section id="mu-service">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="mu-service-area">
									<div className="mu-service-single">
										<span className="fa fa-book"></span>
										<h3>Learn Online</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
									</div>
									<div className="mu-service-single">
										<span className="fa fa-users"></span>
										<h3>Expert Teachers</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
									</div>
									<div className="mu-service-single">
										<span className="fa fa-table"></span>
										<h3>Best Classrooms</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mu-about-us">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="mu-about-us-area">
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="mu-about-us-left">
												<div className="mu-title">
													<h2>About Us</h2>
												</div>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Rerum pariatur fuga eveniet soluta aspernatur rem, nam voluptatibus voluptate voluptates sapiente, inventore.Voluptatem, maiores esse molestiae.</p>
												<ul>
													<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
													<li>Saepe a minima quod iste libero rerum dicta!</li>
													<li>Voluptas obcaecati, iste porro fugit soluta consequuntur.Veritatis?</li>
													<li>Ipsam deserunt numquam ad error rem unde, omnis.</li>
													<li>Repellat assumenda adipisci pariatur ipsam eos similique, explicabo.</li>
												</ul>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Perspiciatis quaerat harum facilis excepturi et?Mollitia!</p>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="mu-about-us-right">
												<a id="mu-abtus-video" href="https://www.youtube.com/embed/HN3pm9qYAUs" target="mutube-video">
													<img src="assets/assets/img/about-us.jpg" alt="img"/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mu-abtus-counter">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="mu-abtus-counter-area">
									<div className="row">
										<div className="col-lg-3 col-md-3 col-sm-3">
											<div className="mu-abtus-counter-single">
												<span className="fa fa-book"></span>
												<h4 className="counter">568</h4>
												<p>Subjects</p>
											</div>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-3">
											<div className="mu-abtus-counter-single">
												<span className="fa fa-users"></span>
												<h4 className="counter">3500</h4>
												<p>Students</p>
											</div>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-3">
											<div className="mu-abtus-counter-single">
												<span className="fa fa-flask"></span>
												<h4 className="counter">65</h4>
												<p>Modern Lab</p>
											</div>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-3">
											<div className="mu-abtus-counter-single no-border">
												<span className="fa fa-user-secret"></span>
												<h4 className="counter">250</h4>
												<p>Teachers</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mu-features">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="mu-features-area">
									<div className="mu-title">
										<h2>Our Features</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio ipsa ea maxime mollitia, vitae voluptates, quod at, saepe reprehenderit totam aliquam architecto fugiat sunt animi!</p>
									</div>
									<div className="mu-features-content">
										<div className="row">
											<div className="col-lg-4 col-md-4  col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-book"></span>
													<h4>Professional Courses</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-users"></span>
													<h4>Expert Teachers</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-laptop"></span>
													<h4>Online Learning</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-microphone"></span>
													<h4>Audio Lessons</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-film"></span>
													<h4>Video Lessons</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-certificate"></span>
													<h4>Professional Certificate</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mu-latest-courses">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="mu-latest-courses-area">
									<div className="mu-title">
										<h2>Latest Courses</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio ipsa ea maxime mollitia, vitae voluptates, quod at, saepe reprehenderit totam aliquam architecto fugiat sunt animi!</p>
									</div>
									<div id="mu-latest-course-slide" className="mu-latest-courses-content">
										<div className="col-lg-4 col-md-4 col-xs-12">
											<div className="mu-latest-course-single">
												<figure className="mu-latest-course-img">
													<a href="#"><img src="assets/assets/img/courses/1.jpg" alt="img"/></a>
													<figcaption className="mu-latest-course-imgcaption">
														<a href="#">Drawing</a>
														<span>
															<i className="fa fa-clock-o"></i>90Days</span>
													</figcaption>
												</figure>
												<div className="mu-latest-course-single-content">
													<h4>
														<a href="#">Lorem ipsum dolor sit amet.</a>
													</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
													<div className="mu-latest-course-single-contbottom">
														<a className="mu-course-details" href="#">Details</a>
														<span className="mu-course-price" href="#">$165.00</span>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-xs-12">
											<div className="mu-latest-course-single">
												<figure className="mu-latest-course-img">
													<a href="#"><img src="assets/assets/img/courses/2.jpg" alt="img"/></a>
													<figcaption className="mu-latest-course-imgcaption">
														<a href="#">Engineering
														</a>
														<span>
															<i className="fa fa-clock-o"></i>75Days</span>
													</figcaption>
												</figure>
												<div className="mu-latest-course-single-content">
													<h4>
														<a href="#">Lorem ipsum dolor sit amet.</a>
													</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
													<div className="mu-latest-course-single-contbottom">
														<a className="mu-course-details" href="#">Details</a>
														<span className="mu-course-price" href="#">$165.00</span>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-xs-12">
											<div className="mu-latest-course-single">
												<figure className="mu-latest-course-img">
													<a href="#"><img src="assets/assets/img/courses/3.jpg" alt="img"/></a>
													<figcaption className="mu-latest-course-imgcaption">
														<a href="#">Academic</a>
														<span>
															<i className="fa fa-clock-o"></i>45Days</span>
													</figcaption>
												</figure>
												<div className="mu-latest-course-single-content">
													<h4>
														<a href="#">Lorem ipsum dolor sit amet.</a>
													</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
													<div className="mu-latest-course-single-contbottom">
														<a className="mu-course-details" href="#">Details</a>
														<span className="mu-course-price" href="#">$165.00</span>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-xs-12">
											<div className="mu-latest-course-single">
												<figure className="mu-latest-course-img">
													<a href="#"><img src="assets/assets/img/courses/1.jpg" alt="img"/></a>
													<figcaption className="mu-latest-course-imgcaption">
														<a href="#">Drawing</a>
														<span>
															<i className="fa fa-clock-o"></i>90Days</span>
													</figcaption>
												</figure>
												<div className="mu-latest-course-single-content">
													<h4>
														<a href="#">Lorem ipsum dolor sit amet.</a>
													</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
													<div className="mu-latest-course-single-contbottom">
														<a className="mu-course-details" href="#">Details</a>
														<span className="mu-course-price" href="#">$165.00</span>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-xs-12">
											<div className="mu-latest-course-single">
												<figure className="mu-latest-course-img">
													<a href="#"><img src="assets/assets/img/courses/2.jpg" alt="img"/></a>
													<figcaption className="mu-latest-course-imgcaption">
														<a href="#">Engineering
														</a>
														<span>
															<i className="fa fa-clock-o"></i>75Days</span>
													</figcaption>
												</figure>
												<div className="mu-latest-course-single-content">
													<h4>
														<a href="#">Lorem ipsum dolor sit amet.</a>
													</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
													<div className="mu-latest-course-single-contbottom">
														<a className="mu-course-details" href="#">Details</a>
														<span className="mu-course-price" href="#">$165.00</span>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-xs-12">
											<div className="mu-latest-course-single">
												<figure className="mu-latest-course-img">
													<a href="#"><img src="assets/assets/img/courses/3.jpg" alt="img"/></a>
													<figcaption className="mu-latest-course-imgcaption">
														<a href="#">Academic</a>
														<span>
															<i className="fa fa-clock-o"></i>45Days</span>
													</figcaption>
												</figure>
												<div className="mu-latest-course-single-content">
													<h4>
														<a href="#">Lorem ipsum dolor sit amet.</a>
													</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
													<div className="mu-latest-course-single-contbottom">
														<a className="mu-course-details" href="#">Details</a>
														<span className="mu-course-price" href="#">$165.00</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mu-our-teacher">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="mu-our-teacher-area">
									<div className="mu-title">
										<h2>Our Teachers</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Culpa, repudiandae, suscipit repellat minus molestiae ea.</p>
									</div>
									<div className="mu-our-teacher-content">
										<div className="row">
											<div className="col-lg-3 col-md-3  col-sm-6">
												<div className="mu-our-teacher-single">
													<figure className="mu-our-teacher-img">
														<img src="assets/assets/img/teachers/teacher-01.png" alt="teacher img"/>
														<div className="mu-our-teacher-social">
															<a href="#">
																<span className="fa fa-facebook"></span>
															</a>
															<a href="#">
																<span className="fa fa-twitter"></span>
															</a>
															<a href="#">
																<span className="fa fa-linkedin"></span>
															</a>
															<a href="#">
																<span className="fa fa-google-plus"></span>
															</a>
														</div>
													</figure>
													<div className="mu-ourteacher-single-content">
														<h4>Brian Dean</h4>
														<span>Math Teacher</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Similique quod pariatur recusandae odio dignissimos.Eligendi.</p>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-3 col-sm-6">
												<div className="mu-our-teacher-single">
													<figure className="mu-our-teacher-img">
														<img src="assets/assets/img/teachers/teacher-02.png" alt="teacher img"/>
														<div className="mu-our-teacher-social">
															<a href="#">
																<span className="fa fa-facebook"></span>
															</a>
															<a href="#">
																<span className="fa fa-twitter"></span>
															</a>
															<a href="#">
																<span className="fa fa-linkedin"></span>
															</a>
															<a href="#">
																<span className="fa fa-google-plus"></span>
															</a>
														</div>
													</figure>
													<div className="mu-ourteacher-single-content">
														<h4>James Hein</h4>
														<span>Physics Teacher</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Similique quod pariatur recusandae odio dignissimos.Eligendi.</p>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-3 col-sm-6">
												<div className="mu-our-teacher-single">
													<figure className="mu-our-teacher-img">
														<img src="assets/assets/img/teachers/teacher-03.png" alt="teacher img"/>
														<div className="mu-our-teacher-social">
															<a href="#">
																<span className="fa fa-facebook"></span>
															</a>
															<a href="#">
																<span className="fa fa-twitter"></span>
															</a>
															<a href="#">
																<span className="fa fa-linkedin"></span>
															</a>
															<a href="#">
																<span className="fa fa-google-plus"></span>
															</a>
														</div>
													</figure>
													<div className="mu-ourteacher-single-content">
														<h4>Rebeca Michel</h4>
														<span>English Teacher</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Similique quod pariatur recusandae odio dignissimos.Eligendi.</p>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-3 col-sm-6">
												<div className="mu-our-teacher-single">
													<figure className="mu-our-teacher-img">
														<img src="assets/assets/img/teachers/teacher-04.png" alt="teacher img"/>
														<div className="mu-our-teacher-social">
															<a href="#">
																<span className="fa fa-facebook"></span>
															</a>
															<a href="#">
																<span className="fa fa-twitter"></span>
															</a>
															<a href="#">
																<span className="fa fa-linkedin"></span>
															</a>
															<a href="#">
																<span className="fa fa-google-plus"></span>
															</a>
														</div>
													</figure>
													<div className="mu-ourteacher-single-content">
														<h4>John Doe</h4>
														<span>Biology Teacher</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Similique quod pariatur recusandae odio dignissimos.Eligendi.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mu-testimonial">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="mu-testimonial-area">
									<div id="mu-testimonial-slide" className="mu-testimonial-content">
										<div className="mu-testimonial-item">
											<div className="mu-testimonial-quote">
												<blockquote>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatem rerum soluta aperiam blanditiis obcaecati eveniet aliquam consequatur nobis eaque id.</p>
												</blockquote>
											</div>
											<div className="mu-testimonial-img">
												<img src="assets/assets/img/testimonial-1.png" alt="img"/>
											</div>
											<div className="mu-testimonial-info">
												<h4>John Doe</h4>
												<span>Happy Student</span>
											</div>
										</div>
										<div className="mu-testimonial-item">
											<div className="mu-testimonial-quote">
												<blockquote>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatem rerum soluta aperiam blanditiis obcaecati eveniet aliquam consequatur nobis eaque id.</p>
												</blockquote>
											</div>
											<div className="mu-testimonial-img">
												<img src="assets/assets/img/testimonial-3.png" alt="img"/>
											</div>
											<div className="mu-testimonial-info">
												<h4>Rebaca Michel</h4>
												<span>Happy Parent</span>
											</div>
										</div>
										<div className="mu-testimonial-item">
											<div className="mu-testimonial-quote">
												<blockquote>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatem rerum soluta aperiam blanditiis obcaecati eveniet aliquam consequatur nobis eaque id.</p>
												</blockquote>
											</div>
											<div className="mu-testimonial-img">
												<img src="assets/assets/img/testimonial-2.png" alt="img"/>
											</div>
											<div className="mu-testimonial-info">
												<h4>Stev Smith</h4>
												<span>Happy Student</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mu-from-blog">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="mu-from-blog-area">
									<div className="mu-title">
										<h2>From Blog</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Rerum vitae quae vero ut natus.Dolore!</p>
									</div>
									<div className="mu-from-blog-content">
										<div className="row">
											<div className="col-md-4 col-sm-4">
												<article className="mu-blog-single-item">
													<figure className="mu-blog-single-img">
														<a href="#"><img src="assets/assets/img/blog/blog-1.jpg" alt="img"/></a>
														<figcaption className="mu-blog-caption">
															<h3>
																<a href="#">Lorem ipsum dolor sit amet.</a>
															</h3>
														</figcaption>
													</figure>
													<div className="mu-blog-meta">
														<a href="#">By Admin</a>
														<a href="#">02 June 2016</a>
														<span>
															<i className="fa fa-comments-o"></i>87</span>
													</div>
													<div className="mu-blog-description">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae ipsum non voluptatum eum repellendus quod aliquid.Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.</p>
														<a className="mu-read-more-btn" href="#">Read More</a>
													</div>
												</article>
											</div>
											<div className="col-md-4 col-sm-4">
												<article className="mu-blog-single-item">
													<figure className="mu-blog-single-img">
														<a href="#"><img src="assets/assets/img/blog/blog-2.jpg" alt="img"/></a>
														<figcaption className="mu-blog-caption">
															<h3>
																<a href="#">Lorem ipsum dolor sit amet.</a>
															</h3>
														</figcaption>
													</figure>
													<div className="mu-blog-meta">
														<a href="#">By Admin</a>
														<a href="#">02 June 2016</a>
														<span>
															<i className="fa fa-comments-o"></i>87</span>
													</div>
													<div className="mu-blog-description">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae ipsum non voluptatum eum repellendus quod aliquid.Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.</p>
														<a className="mu-read-more-btn" href="#">Read More</a>
													</div>
												</article>
											</div>
											<div className="col-md-4 col-sm-4">
												<article className="mu-blog-single-item">
													<figure className="mu-blog-single-img">
														<a href="#"><img src="assets/assets/img/blog/blog-3.jpg" alt="img"/></a>
														<figcaption className="mu-blog-caption">
															<h3>
																<a href="#">Lorem ipsum dolor sit amet.</a>
															</h3>
														</figcaption>
													</figure>
													<div className="mu-blog-meta">
														<a href="#">By Admin</a>
														<a href="#">02 June 2016</a>
														<span>
															<i className="fa fa-comments-o"></i>87</span>
													</div>
													<div className="mu-blog-description">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae ipsum non voluptatum eum repellendus quod aliquid.Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.</p>
														<a className="mu-read-more-btn" href="#">Read More</a>
													</div>
												</article>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<footer id="mu-footer">
					<div className="mu-footer-top">
						<div className="container">
							<div className="mu-footer-top-area">
								<div className="row">
									<div className="col-lg-3 col-md-3 col-sm-3">
										<div className="mu-footer-widget">
											<h4>Information</h4>
											<ul>
												<li>
													<a href="#">About Us</a>
												</li>
												<li>
													<a href="">Features</a>
												</li>
												<li>
													<a href="">Course</a>
												</li>
												<li>
													<a href="">Event</a>
												</li>
												<li>
													<a href="">Sitemap</a>
												</li>
												<li>
													<a href="">Term Of Use</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-3">
										<div className="mu-footer-widget">
											<h4>Student Help</h4>
											<ul>
												<li>
													<a href="">Get Started</a>
												</li>
												<li>
													<a href="#">My Questions</a>
												</li>
												<li>
													<a href="">Download Files</a>
												</li>
												<li>
													<a href="">Latest Course</a>
												</li>
												<li>
													<a href="">Academic News</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-3">
										<div className="mu-footer-widget">
											<h4>News letter</h4>
											<p>Get latest update, news & academic offers</p>
											<form className="mu-subscribe-form">
												<input type="email" placeholder="Type your Email"/>
												<button className="mu-subscribe-btn" type="submit">Subscribe!</button>
											</form>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-3">
										<div className="mu-footer-widget">
											<h4>Contact</h4>
											<address>
												<p>P.O.Box 320, Ross, California 9495, USA</p>
												<p>Phone: (415) 453-1568
												</p>
												<p>Website: www.markups.io</p>
												<p>Email: info @markups.io</p>
											</address>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

IndexComponent.propTypes = {};

export default IndexComponent;
