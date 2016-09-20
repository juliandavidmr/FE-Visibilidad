import React, {Component, PropTypes} from 'react';

class CursosComponent extends Component {
  
  constructor(props) {
    super(props);
    
  }
  

  render() {
    const { title, description, items } = this.props;

    return (
      <section id="mu-latest-courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="mu-latest-courses-area">
                <div className="mu-title">
                  <h2>{ title }</h2>
                  <p>{ description }</p>
                </div>
                <div id="mu-latest-course-slide" className="mu-latest-courses-content">
                  {
                    items.map((item, i) => {
                      return (
                        <div key={ i } className="col-lg-4 col-md-4 col-xs-12">
                          <div className="mu-latest-course-single">
                            <figure className="mu-latest-course-img">
                              <a href="#"><img src={ item.img } alt="img"/></a>
                              <figcaption className="mu-latest-course-imgcaption">
                                <a href="#">{ item.title }</a>
                                <span>
                                  <i className="fa fa-clock-o"></i>
                                  { item.time }
                                  </span>
                              </figcaption>
                            </figure>
                            <div className="mu-latest-course-single-content">
                              <h4>
                                <a href="#">
                                  { item.description }
                                </a>
                              </h4>
                              <p>
                                {
                                  item.resume
                                }
                              </p>
                              <div className="mu-latest-course-single-contbottom">
                                <a className="mu-course-details" href="#">Detalle</a>
                                <span className="mu-course-price" href="#">
                                  {
                                    item.price
                                  }                
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

CursosComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default CursosComponent;