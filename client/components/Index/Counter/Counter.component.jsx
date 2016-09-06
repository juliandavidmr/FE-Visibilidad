import React, { Component, PropTypes } from 'react';

class CounterComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { tags } = this.props;

    return (
      <section id="mu-abtus-counter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-abtus-counter-area">
                <div className="row">
                  {
                    tags.map((item, i) => {
                      return (
                        <div className="col-lg-3 col-md-3 col-sm-3" key={i}>
                          <div className="mu-abtus-counter-single">
                            <span className={item.class}></span>
                            <h4 className="counter">{item.number}</h4>
                            <p>{item.subtitle}</p>
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

CounterComponent.propTypes = {
  tags: PropTypes.array.isRequired
};

export default CounterComponent;