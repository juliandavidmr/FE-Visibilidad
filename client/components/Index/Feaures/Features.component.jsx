import React, {Component, PropTypes} from 'react';

class FeaturesComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { tags } = this.props;
    return (
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
                    {
                      tags.map((item, i) => {
                        return (
                          <div className="col-lg-4 col-md-4 col-sm-6" key={i}>
                            <div className="mu-single-feature">
                              <span className={item.class}></span>
                              <h4>{item.title}</h4>
                              <p>{item.description}</p>
                              <a href={item.link}>Leer más</a>
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
        </div>
      </section>
    );
  }
}

FeaturesComponent.propTypes = {
  tags: PropTypes.array.isRequired
};

export default FeaturesComponent;