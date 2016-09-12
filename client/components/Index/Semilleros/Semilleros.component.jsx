import React, {Component, PropTypes} from 'react';

class SemillerosComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { title, description, list_semilleros } = this.props;
    
    return (
      <section id="mu-our-teacher">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-our-teacher-area">
                <div className="mu-title">
                  <h2>
                    { title }
                  </h2>
                  <p>
                    { description }
                  </p>
                </div>
                <div className="mu-our-teacher-content">
                  <div className="row">
                    {
                      list_semilleros? list_semilleros.map((item, i) => {
                        return (
                          <div key={i} className="col-lg-3 col-md-3 col-sm-6">
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
                        );
                      }) : 'No hay semilleros de investigacion'
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

SemillerosComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list_semilleros: PropTypes.any
};

export default SemillerosComponent;