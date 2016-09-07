import React, {Component, PropTypes} from 'react';

class EventosComponent extends Component {
  render() {
    return (
      <div>
        <section id="mu-page-breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-page-breadcrumb-area">
                  <h2>Eventos</h2>
                  <ol className="breadcrumb">
                    <li><a href="#">Index</a></li>
                    <li className="active">Principal</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mu-course-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-course-content-area">
                  <div className="row">
                    <div className="col-md-9">

                      <div className="mu-course-container mu-course-details">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mu-latest-course-single">
                              <figure className="mu-latest-course-img">
                                <a href="#"><img src="assets/img/courses/1.jpg" alt="img"/></a>
                                <figcaption className="mu-latest-course-imgcaption">
                                  <a href="#">Drawing</a>
                                  <span><i className="fa fa-clock-o"></i>90Days</span>
                                </figcaption>
                              </figure>
                              <div className="mu-latest-course-single-content">
                                <h2><a href="#">Lorem ipsum dolor sit amet.</a></h2>
                                <h4>Course Information</h4>
                                <ul>
                                  <li>
                                    <span>Course Price</span>
                                    <span>$250</span>
                                  </li>
                                  <li>
                                    <span>Place</span>
                                    <span>California, USA</span>
                                  </li>
                                  <li>
                                    <span>Total Students</span>
                                    <span>800+</span>
                                  </li>
                                  <li>
                                    <span>Course Duration</span>
                                    <span>4 Weeks</span>
                                  </li>
                                  <li> <span>Course Start</span> <span>July 25, 2016</span></li>
                                </ul>
                                <h4>Description</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quo est itaque vero porro quasi illo ex consequuntur ad animi commodi, ipsam provident voluptas vel adipisci.</p>
                                <blockquote>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Deleniti, placeat, ipsa.Modi sed quibusdam vel autem fugit, eaque, iste.Excepturi fugit dignissimos suscipit dolor perferendis debitis magni sed, quia ab.</p>
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis ea consequatur doloremque deleniti error ullam, accusamus vel est alias, sit.Similique voluptas aliquid, excepturi accusamus, sequi ducimus incidunt mollitia non.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nisi saepe possimus doloribus quod quibusdam officia suscipit qui illum nemo itaque, porro ipsam tempore enim error eius quia, culpa.Reprehenderit consequuntur voluptatem dolorum magni natus inventore molestias veritatis eos aspernatur repudiandae.</p>
                                <h4>Course Outline</h4>
                                <div className="table-responsive">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th> Title </th>
                                        <th> Course Time </th>
                                        <th> Spent Time </th>
                                        <th> Status </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td> 1. Topic 1 </td>
                                        <td> 15: 30 </td>
                                        <td> 13: 80 </td>
                                        <td> Successful </td>
                                      </tr>
                                      <tr>
                                        <td> 2. Topic 2 </td>
                                        <td> 15: 30 </td>
                                        <td> 13: 80 </td>
                                        <td> Successful </td>
                                      </tr>
                                      <tr>
                                        <td> 3. Topic 3 </td>
                                        <td> 15: 30 </td>
                                        <td> - </td>
                                        <td> Successful </td>
                                      </tr>
                                      <tr>
                                        <td> 4. Topic 4 </td>
                                        <td> 15: 30 </td>
                                        <td> 13: 80 </td>
                                        <td> Successful </td>
                                      </tr>
                                      <tr>
                                        <td> 5. Topic 5 </td>
                                        <td> 15: 30 </td>
                                        <td> - </td>
                                        <td> Waiting </td>
                                      </tr>
                                      <tr>
                                        <td> 6. Topic 6 </td>
                                        <td> 15: 30 </td>
                                        <td> 13: 80 </td>
                                        <td> - </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="mu-related-item">
                            <h3>Related Courses</h3>
                            <div className="mu-related-item-area">
                              <div id="mu-related-item-slide">
                                <div className="col-md-6">
                                  <div className="mu-latest-course-single">
                                    <figure className="mu-latest-course-img">
                                      <a href="#"><img alt="img" src="assets/img/courses/1.jpg"/></a>
                                      <figcaption className="mu-latest-course-imgcaption">
                                        <a href="#">Drawing</a>
                                        <span><i className="fa fa-clock-o"></i>90Days</span>
                                      </figcaption>
                                    </figure>
                                    <div className="mu-latest-course-single-content">
                                      <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                                      <div className="mu-latest-course-single-contbottom">
                                        <a href="#" className="mu-course-details">Details</a>
                                        <span href="#" className="mu-course-price">$165.00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mu-latest-course-single">
                                    <figure className="mu-latest-course-img">
                                      <a href="#"><img alt="img" src="assets/img/courses/2.jpg"/></a>
                                      <figcaption className="mu-latest-course-imgcaption">
                                        <a href="#">Drawing</a>
                                        <span><i className="fa fa-clock-o"></i>90Days</span>
                                      </figcaption>
                                    </figure>
                                    <div className="mu-latest-course-single-content">
                                      <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                                      <div className="mu-latest-course-single-contbottom">
                                        <a href="#" className="mu-course-details">Details</a>
                                        <span href="#" className="mu-course-price">$165.00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mu-latest-course-single">
                                    <figure className="mu-latest-course-img">
                                      <a href="#"><img alt="img" src="assets/img/courses/3.jpg"/></a>
                                      <figcaption className="mu-latest-course-imgcaption">
                                        <a href="#">Drawing</a>
                                        <span><i className="fa fa-clock-o"></i>90Days</span>
                                      </figcaption>
                                    </figure>
                                    <div className="mu-latest-course-single-content">
                                      <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                                      <div className="mu-latest-course-single-contbottom">
                                        <a href="#" className="mu-course-details">Details</a>
                                        <span href="#" className="mu-course-price">$165.00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mu-latest-course-single">
                                    <figure className="mu-latest-course-img">
                                      <a href="#"><img alt="img" src="assets/img/courses/1.jpg"/></a>
                                      <figcaption className="mu-latest-course-imgcaption">
                                        <a href="#">Drawing</a>
                                        <span><i className="fa fa-clock-o"></i>90Days</span>
                                      </figcaption>
                                    </figure>
                                    <div className="mu-latest-course-single-content">
                                      <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                                      <div className="mu-latest-course-single-contbottom">
                                        <a href="#" className="mu-course-details">Details</a>
                                        <span href="#" className="mu-course-price">$165.00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-md-3">

                      <aside className="mu-sidebar">

                        <div className="mu-single-sidebar">
                          <h3>Categories</h3>
                          <ul className="mu-sidebar-catg">
                            <li><a href="#">Web Design</a></li>
                            <li><a href="">Web Development</a></li>
                            <li><a href="">Math</a></li>
                            <li><a href="">Physics</a></li>
                            <li><a href="">Camestry</a></li>
                            <li><a href="">English</a></li>
                          </ul>
                        </div>

                        <div className="mu-single-sidebar">
                          <h3>Popular Course</h3>
                          <div className="mu-sidebar-popular-courses">
                            <div className="media">
                              <div className="media-left">
                                <a href="#">
                                  <img className="media-object" src="assets/img/courses/1.jpg" alt="img"/>
                                </a>
                              </div>
                              <div className="media-body">
                                <h4 className="media-heading"><a href="#">Medical Science</a></h4>
                                <span className="popular-course-price">$200.00</span>
                              </div>
                            </div>
                            <div className="media">
                              <div className="media-left">
                                <a href="#">
                                  <img className="media-object" src="assets/img/courses/2.jpg" alt="img"/>
                                </a>
                              </div>
                              <div className="media-body">
                                <h4 className="media-heading"><a href="#">Web Design</a></h4>
                                <span className="popular-course-price">$250.00</span>
                              </div>
                            </div>
                            <div className="media">
                              <div className="media-left">
                                <a href="#">
                                  <img className="media-object" src="assets/img/courses/3.jpg" alt="img"/>
                                </a>
                              </div>
                              <div className="media-body">
                                <h4 className="media-heading"><a href="#">Health & Sports</a></h4>
                                <span className="popular-course-price">$90.00</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mu-single-sidebar">
                          <h3>Archives</h3>
                          <ul className="mu-sidebar-catg mu-sidebar-archives">
                            <li><a href="#">May <span>(25) </span></a></li>
                            <li><a href="">June <span>(35) </span></a></li>
                            <li><a href="">July <span>(20) </span></a></li>
                            <li><a href="">August <span>(125) </span></a></li>
                            <li><a href="">September <span>(45) </span></a></li>
                            <li><a href="">October <span>(85) </span></a></li>
                          </ul>
                        </div>
                        <div className="mu-single-sidebar">
                          <h3>Tags Cloud</h3>
                          <div className="tag-cloud">
                            <a href="#">Health</a>
                            <a href="#">Science</a>
                            <a href="#">Sports</a>
                            <a href="#">Mathematics</a>
                            <a href="#">Web Design</a>
                            <a href="#">Admission</a>
                            <a href="#">History</a>
                            <a href="#">Environment</a>
                          </div>
                        </div>

                      </aside>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

EventosComponent.propTypes = {

};

export default EventosComponent;