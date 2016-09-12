import React, {Component, PropTypes} from 'react';

import HeaderComponent from './Header/Header.component.jsx';
import MenuComponent from './Menu/Menu.component.jsx';
import SliderComponent from './Slider/Slider.component.jsx';
import ServiceComponent from './Service/Service.component.jsx';
import AboutComponent from './About/About.component.jsx';
import FeaturesComponent from './Feaures/Features.component.jsx';
import CounterComponent from './Counter/Counter.component.jsx';
import SemillerosComponent from './Semilleros/Semilleros.component.jsx';

class IndexComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { list_semilleros } = this.props;

    return (
      <div>
        <SliderComponent slides={[
          {
            id: 1,
            img: 'assets/assets/img/slider/1.jpg',
            titulo: 'Titulo de prueba',
            resumen: 'un resumen cualquiera',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            link: 'in link'
          }, {
            id: 2,
            img: 'assets/assets/img/slider/2.jpg',
            titulo: 'Titulo de prueba 2',
            resumen: 'un resumen cualquiera2',
            descripcion: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            link: 'in lin22222k'
          }
        ]} />

        <ServiceComponent/>

        <AboutComponent/>

        <CounterComponent tags={[
          {
            class: 'fa fa-book',
            number: 890,
            subtitle: 'Subjects'
          }, {
            class: 'fa fa-users',
            number: 3500,
            subtitle: 'Students'
          }, {
            class: 'fa fa-flask',
            number: 67,
            subtitle: 'Modern Lab'
          }, {
            class: 'fa fa-user-secret',
            number: 250,
            subtitle: 'Teachers'
          }
        ]}/>

        <FeaturesComponent tags={[
          {
            title: 'Professional Courses',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.',
            link: '#unid',
            class: 'fa fa-book'
          }, {
            title: 'Expert Teachers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.',
            link: '#otroid',
            class: 'fa fa-users'
          }, {
            title: 'Online Learning',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.',
            link: '',
            class: 'fa fa-laptop'
          }, {
            title: 'Audio Lessons',
            description: 'Lorem ipsum dolor sit amet, consectetur elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.',
            link: '',
            class: 'fa fa-microphone'
          }, {
            title: 'Video Lessons',
            description: 'Lorem ipsum dolor sit, consectetur adipisicing elit.Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.',
            link: '',
            class: 'fa fa-film'
          }
        ]}/>

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

        <SemillerosComponent title="Semilleros de investigación" list={list_semilleros}/>

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
