import React, { Component, PropTypes } from 'react';

class SliderComponent extends Component {
	constructor(props) {
		super(props);

	}

	render() {
    const { slides } = this.props;

		return (
			<section id="mu-slider">
        {
          slides.map((item) => {
            return (
              <div className="mu-slider-single" key={item.id}>
                <div className="mu-slider-img">
                  <figure>
                    <img src={item.img} alt="img"/>
                  </figure>
                </div>
                <div className="mu-slider-content">
                  <h4>{item.titulo}</h4>
                  <span></span>
                  <h2>{item.resumen}</h2>
                  <p>{item.descripcion}</p>
                  <a href={item.link} className="mu-read-more-btn">Leer más</a>
                </div>
              </div>
            );
          })
        }
			</section>
		);
	}
}

SliderComponent.propTypes = {
  slides: PropTypes.array.isRequired
};

export default SliderComponent;
