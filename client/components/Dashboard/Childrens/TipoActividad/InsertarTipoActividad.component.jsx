import React, {Component, PropTypes} from 'react';
import Formous from 'formous';

/**
 * Muestra los errores
 *
 * @class ErrorText
 * @extends {Component}
 */
class ErrorText extends Component {
  render() {
    return (
      <div style={{ color: '#f00' }}>
        {this.props.errorText}
      </div>
    );
  }
}

/**
 * Componente de insertar actividad
 *
 * @class InsertarTipoActividadComponent
 * @extends {Component}
 */
class InsertarTipoActividadComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this._onChange = this._onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	/**
	 * Usado para cuando el form envia parametros
	 *
	 * @param {any} formStatus
	 * @param {any} fields
	 * @returns
	 *
	 * @memberOf InsertarTipoActividadComponent
	 */
  handleSubmit(formStatus, fields) {
    if (!formStatus.touched) {
      alert('Debe llenar el formulario');
      return;
    }

    if (!formStatus.valid) {
      alert('Please address the errors in the form.');
      return;
    }

    // All good! Do something with fields.email.value and fields.password.value
    // console.log(formStatus, fields);
		this.props.onClickRegistrar();
  }


	/**
	 * Detecta los cambios en el formulario y los almacena en el state del container
	 *
	 * @param {any} e
	 *
	 * @memberOf InsertarTipoActividadComponent
	 */
	_onChange(e) {
    var state = {};
    state[e.target.name] = e.target.value;
    this.props.onChange(state); // Cambia el estado del container
  }

	render() {
		const {
			onClick // Componente del boton registrar
		} = this.props;

		const {
      fields: {
				nombre,
				descripcion
			},
      formSubmit,
    } = this.props;

		return (
			<form className="row" onSubmit={formSubmit(this.handleSubmit) }>
				<div className="col-xs-12">
					<div className="box">
						<div className="box-header">
							<h3 className="box-title">Listado de tipos de actividades</h3>

							<div className="box-body">
								<div className="form-group">
									<label>Nombre del Subpermiso</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="nombre" type="text" ref="nombre" placeholder="" { ...nombre.events } onChange={this._onChange} />
									</div>
									<ErrorText { ...nombre.failProps } />
								</div>

								<div className="form-group">
									<label>Icono</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="descripcion" type="text" ref="descripcion" placeholder="" { ...descripcion.events } onChange={this._onChange}/>
									</div>
									<ErrorText { ...descripcion.failProps } />
								</div>

								<div className="form-group">
									<div className="input-group">
										<button type="submit" className="btn btn-primary">
											Regitrar
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

const formousOptions = {
  fields: {
    nombre: {
      tests: [
        {
          critical: true,
          failProps: {
            errorText: 'El nombre es requerido.'
          },
          test(value) {
            return value !== '';
          }
        }
      ]
    },

    descripcion: {
      tests: [
				{
          critical: true,
          failProps: {
            errorText: 'La descripcion es requerida.'
          },
          test(value) {
            return value !== '';
          }
        }
      ]
    }
  }
};

InsertarTipoActividadComponent.propTypes = {
	onChange: PropTypes.func.isRequired,
	onClickRegistrar: PropTypes.func.isRequired
};

export default Formous(formousOptions)(InsertarTipoActividadComponent);
