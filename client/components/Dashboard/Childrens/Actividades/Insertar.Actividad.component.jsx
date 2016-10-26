import React, {Component, PropTypes} from 'react';
import Formous from 'formous';

class ErrorText extends Component {

	render() {
		return (
			<div style={{
				color: '#f00'
			}}>
				{
          this.props.errorText
        }
			</div>
		);
	}
}

class InsertarActividadComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this._onChange = this._onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

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
   * @memberOf InsertarSubpermisoComponent
   */
	_onChange(e) {
		var state = {};
		state[e.target.name] = e.target.value;
		this.props.onChange(state); // Cambia el estado del container
	}

	render() {
		const {
			fields: {
				descripcion,
				fecha_inicio,
				fecha_fin,
				lugar,
				id_tipo_actividad,
				id_evento,
				ruta_adjunto
			},
			formSubmit
		} = this.props;

		const {tipos_actividades_list, evento_list} = this.props;

		return (
			<form className="row" onSubmit={formSubmit(this.handleSubmit)}>
				<div className="col-xs-12">
					<div className="box">
						<div className="box-header">
							<h3 className="box-title">Insertar actividad</h3>

							<div className="box-body">
								<div className="form-group">
									<label>Descripción</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="descripcion" type="text" ref="descripcion" placeholder="" { ...descripcion.events } onChange={this._onChange}/>
									</div>
									<ErrorText { ...descripcion.failProps }/>
								</div>

								<div className="form-group">
									<label>Fecha inicio</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="fecha_inicio" type="dateTime" ref="fecha_inicio" placeholder="" { ...fecha_inicio.events } onChange={this._onChange}/>
									</div>
									<ErrorText { ...fecha_inicio.failProps }/>
								</div>

								<div className="form-group">
									<label>Fecha fin</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="fecha_fin" type="dateTime" ref="fecha_fin" placeholder="" { ...fecha_fin.events } onChange={this._onChange}/>
									</div>
									<ErrorText { ...fecha_fin.failProps }/>
								</div>

								<div className="form-group">
									<label>Lugar</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="lugar" type="text" ref="lugar" placeholder="" { ...lugar.events } onChange={this._onChange}/>
									</div>
									<ErrorText { ...lugar.failProps }/>
								</div>

								<div className="form-group">
									<label>Tipos de actividades:
									</label>
									<select className="select" id="sel1" name="id_permiso" onChange={this._onChange}>
										{
                        tipos_actividades_list.map((item, i) => {
												return (
													<option key={i} value={item.PRMS_IDPERMISO}>
														{item.PRMS_NOMBREPERMISO}
													</option>
												);
											})
                    }
									</select>
								</div>

								<div className="form-group">
									<label>Evento:
									</label>
									<select className="select" id="sel1" name="id_permiso" onChange={this._onChange}>
										{
                      evento_list.map((item, i) => {
												return (
													<option key={i} value={item.PRMS_IDPERMISO}>
														{item.PRMS_NOMBREPERMISO}
													</option>
												);
											})
                    }
									</select>
								</div>

								<div className="form-group">
									<label>Ruta adjunto</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="ruta_adjunto" type="text" ref="ruta_adjunto" placeholder="" { ...ruta_adjunto.events } onChange={this._onChange}/>
									</div>
									<ErrorText { ...ruta_adjunto.failProps }/>
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
		descripcion: {
			tests: [
				{
					critical: true,
					failProps: {
						errorText: 'La descripción es requerida.'
					},
					test(value) {
						return value !== '';
					}
				}
			]
		},
		fecha_inicio: {
			tests: [
				{
					critical: true,
					failProps: {
						errorText: 'La fecha de inicio es requerida.'
					},
					test(value) {
						return value !== '';
					}
				}
			]
		},
		fecha_fin: {
			tests: [
				{
					critical: true,
					failProps: {
						errorText: 'La fecha final es requerida.'
					},
					test(value) {
						return value !== '';
					}
				}
			]
		},
		lugar: {
			tests: [
				{
					critical: true,
					failProps: {
						errorText: 'El lugar es requerido.'
					},
					test(value) {
						return value !== '';
					}
				}
			]
		},
		id_tipo_actividad: {
			tests: [
				{
					critical: true,
					failProps: {
						errorText: 'El tipo de actividad es requerido.'
					},
					test(value) {
						return value !== '';
					}
				}
			]
		},
		id_evento: {
			tests: [
				{
					critical: true,
					failProps: {
						errorText: 'La id evento es requerida.'
					},
					test(value) {
						return value !== '';
					}
				}
			]
		},
		ruta_adjunto: {
			tests: [
				{
					critical: true,
					failProps: {
						errorText: 'La ruta es requerida.'
					},
					test(value) {
						return value !== '';
					}
				}
			]
		}
	}
};

InsertarActividadComponent.propTypes = {
	evento_list: PropTypes.array.isRequired,
	tipos_actividades_list: PropTypes.array.isRequired,
	onClickRegistrar: PropTypes.func.isRequired
};

export default Formous(formousOptions)(InsertarActividadComponent);
